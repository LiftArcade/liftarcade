// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			// Sets up  the drizzle db connection
			drizzleDB: Awaited<ReturnType<typeof import('@liftarcade/services-database').drizzleClient>>;

			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
	}
}

export {};
