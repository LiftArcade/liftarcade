// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			// Sets up  the drizzle db connection
			drizzleDB: Awaited<ReturnType<typeof import('@liftarcade/services-database').drizzleClient>>;
		}

		// interface PageData {}
		// interface Platform {}

		interface Session {
			user: {
				id?: string;
				name?: string;
				email?: string;
				image?: string;
			};
		}

		interface DefaultSession {
			user: {
				id?: string;
				name?: string;
				email?: string;
				image?: string;
			};
		}
	}
}

declare module '@auth/core/types' {
	interface Session {
		user: {
			id: string;
		} & DefaultSession['user'];
	}
	interface DefaultSession {
		user: {
			id: string;
		} & DefaultSession['user'];
	}
}

export {};
