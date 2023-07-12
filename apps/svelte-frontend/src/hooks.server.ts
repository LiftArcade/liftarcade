import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, NEXTAUTH_SECRET } from '$env/static/private';
import { dbForServerHandle, pgDrizzleAdapter } from '$lib/utils/db';
import type { Handle } from '@sveltejs/kit';
import Facebook from '@auth/core/providers/facebook';
import type { Provider } from '@auth/core/providers';
import type { DefaultSession } from '@auth/core/types';

// Import authentication handle from apps/svelte-frontend/src/lib/authentication.ts

const attachDatabaseServerHandle = (async ({ event, resolve }) => {
	const drizzleDB = dbForServerHandle;
	event.locals.drizzleDB = drizzleDB;
	const response = await resolve(event);
	return response;
}) satisfies Handle;

const authHandle = SvelteKitAuth({
	adapter: pgDrizzleAdapter(dbForServerHandle),
	secret: NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt'
	},
	providers: [
		Facebook({
			clientId: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET
		}) as Provider
	],
	callbacks: {
		async session({ session, token }) {
			if (token && session.user) {
				session.user.id = token.sub;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
			}

			return session;
		},
		async jwt({ token, user, account }) {
			if (user) {
				token.id = user?.id;
			}
			return token;
		}
	},
	trustHost: true
}) satisfies Handle;

// export const authHandle = (async ({ event, resolve }) => {
// 	event.locals.auth = auth.handleRequest(event);
// 	return await resolve(event);
// }) satisfies Handle;

export const handle = sequence(attachDatabaseServerHandle, authHandle);
