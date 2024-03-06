// src/lib/server/auth.ts
import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';

import { sessions, users } from '@liftarcade/services-database';
import { dbClient } from '$lib/utils/db';

// Add Oauth providers here
import { Facebook } from 'arctic';

import { VERCEL_ENV } from '$env/static/private';
import { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } from '$env/static/private';

import type { InferSelectModel } from 'drizzle-orm/table';

const adapter = new DrizzlePostgreSQLAdapter(dbClient, sessions, users);

let baseURL;
switch (VERCEL_ENV) {
	case 'production': {
		baseURL = 'https://www.liftarcade.com/';
		break;
	}
	case 'preview': {
		baseURL = 'https://dev.liftarcade.com/';
		break;
	}
	default: {
		baseURL = 'http://localhost:5173/';
		break;
	}
}

/**
 * This is the Lucia instance that is used by the server to handle requests.
 * @description Don't use this directly unless you are adding it to the server handle.
 * @dbClient a drizzle client instance that is attached to the server handle.
 */
export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			id: attributes.id,
			name: attributes.name,
			image: attributes.image,
			email: attributes.email
		};
	}
});

// Export the oauth provider instances after configuration.
export const facebook = new Facebook(
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	baseURL + '/api/auth/facebook/callback'
);

// export const google = new Google(
// 	GOOGLE_CLIENT_ID,
// 	GOOGLE_CLIENT_SECRET,
// 	'http://localhost:5173/api/auth/google/callback'
// );

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes extends InferSelectModel<typeof users> {}
