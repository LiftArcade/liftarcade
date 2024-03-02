// routes/login/github/callback/+server.ts
import { OAuth2RequestError } from 'arctic';
import { facebook, lucia } from '$lib/utils/auth';

import type { RequestEvent } from '@sveltejs/kit';
import { dbClient } from '$lib/utils/db';
import { users } from '@liftarcade/services-database';
import { eq } from 'drizzle-orm';

export async function GET(event: RequestEvent): Promise<Response> {
	// Get the callback codes, state and the stored state from the request
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');
	const storedState = event.cookies.get('facebook_oauth_state') ?? null;

	if (!code || !state || !storedState || state !== storedState) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const tokens = await facebook.validateAuthorizationCode(code);
		const url = new URL('https://graph.facebook.com/me');

		url.searchParams.set('access_token', tokens.accessToken);
		url.searchParams.set('fields', ['id', 'name', 'picture', 'email'].join(','));

		const response = await fetch(url);
		const facebookUser: FacebookUser = await response.json();

		// Replace this with your own DB client.
		const existingUser = await dbClient
			.select()
			.from(users)
			.where(eq(users.facebook_id, facebookUser.id));

		if (existingUser && existingUser.length > 0) {
			const session = await lucia.createSession(existingUser[0].id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		} else {
			// Replace this with your own DB client.
			const insertedValue = await dbClient
				.insert(users)
				.values({
					name: facebookUser.name,
					facebook_id: facebookUser.id,
					email: facebookUser.email,
					image: facebookUser.picture.data.url
				})
				.returning({ id: users.id });

			const session = await lucia.createSession(insertedValue[0].id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		}
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	} catch (e) {
		// the specific error message depends on the provider
		if (e instanceof OAuth2RequestError) {
			// invalid code
			return new Response(null, {
				status: 400
			});
		}
		return new Response(null, {
			status: 500
		});
	}
}

interface FacebookUser {
	id: string;
	name: string;
	picture: {
		data: {
			height: number;
			is_silhouette: boolean;
			url: string;
			width: number;
		};
	};
	email: string;
}
