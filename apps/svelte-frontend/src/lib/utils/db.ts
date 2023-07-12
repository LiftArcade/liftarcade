/* eslint-disable unicorn/prevent-abbreviations */
import { drizzleClient } from '@liftarcade/services-database';
import { DATABASE_URL } from '$env/static/private';
import type { Adapter } from '@auth/core/adapters';
export type DbClient = typeof drizzleClient;
import { and, eq } from 'drizzle-orm';

import { users, accounts, sessions, verificationTokens } from '@liftarcade/services-database';
export const defaultSchema = { users, accounts, sessions, verificationTokens };
export type DefaultSchema = typeof defaultSchema;
type CustomSchema = DefaultSchema;
// interface CustomSchema extends DefaultSchema {} <- If you want to extend the schema in the future.

/**
 * This is probably not what you wanted. instead, use the event.locals.db
 * This is the database client that is used by the server to handle requests.
 * @description Don't use this directly unless you are adding it to the server handle.
 *
 */
export const dbForServerHandle = drizzleClient(DATABASE_URL, true);

/**
 * Mostly taken from https://github.com/matheins/Dorf/blob/main/src/lib/db/lib/drizzle-adapter.ts
 */
export function pgDrizzleAdapter(
	client: typeof dbForServerHandle,
	schema?: Partial<CustomSchema>
): Adapter {
	const { users, accounts, sessions, verificationTokens } = {
		users: schema?.users ?? defaultSchema.users,
		accounts: schema?.accounts ?? defaultSchema.accounts,
		sessions: schema?.sessions ?? defaultSchema.sessions,
		verificationTokens: schema?.verificationTokens ?? defaultSchema.verificationTokens
	};

	return {
		createUser: async (data) => {
			const id = crypto.randomUUID();
			await client.insert(users).values({ ...data, id });

			return client
				.select()
				.from(users)
				.where(eq(users.id, id))
				.then((res) => res[0]);
		},
		getUser: async (data) => {
			return (
				client
					.select()
					.from(users)
					.where(eq(users.id, data))
					.then((res) => res[0]) ?? null
			);
		},
		getUserByEmail: async (data) => {
			return (
				client
					.select()
					.from(users)
					.where(eq(users.email, data))
					.then((res) => res[0]) ?? null
			);
		},
		createSession: async (data) => {
			return client
				.select()
				.from(sessions)
				.where(eq(sessions.sessionToken, data.sessionToken))
				.then((res) => res[0]);
		},
		getSessionAndUser: async (data) => {
			return (
				client
					.select({
						session: sessions,
						user: users
					})
					.from(sessions)
					.where(eq(sessions.sessionToken, data))
					.innerJoin(users, eq(users.id, sessions.userId))
					.then((res) => res[0]) ?? null
			);
		},
		updateUser: async (data) => {
			if (!data.id) {
				throw new Error('No user id.');
			}
			await client.update(users).set(data).where(eq(users.id, data.id));

			return client
				.select()
				.from(users)
				.where(eq(users.id, data.id))
				.then((res) => res[0]);
		},
		updateSession: async (data) => {
			await client.update(sessions).set(data).where(eq(sessions.sessionToken, data.sessionToken));

			return client
				.select()
				.from(sessions)
				.where(eq(sessions.sessionToken, data.sessionToken))
				.then((res) => res[0]);
		},
		linkAccount: async (rawAccount) => {
			await client.insert(accounts).values(rawAccount);
		},
		getUserByAccount: async (account) => {
			const databaseAccount = await client
				.select()
				.from(accounts)
				.where(
					and(
						eq(accounts.providerAccountId, account.providerAccountId),
						eq(accounts.provider, account.provider)
					)
				)
				.leftJoin(users, eq(accounts.userId, users.id))
				.then((res) => res[0]);
			if (!databaseAccount) return null;

			return databaseAccount.users;
		},
		deleteSession: async (sessionToken) => {
			await client.delete(sessions).where(eq(sessions.sessionToken, sessionToken));
		},
		createVerificationToken: async (token) => {
			await client.insert(verificationTokens).values(token);

			return client
				.select()
				.from(verificationTokens)
				.where(eq(verificationTokens.identifier, token.identifier))
				.then((res) => res[0]);
		},
		useVerificationToken: async (token) => {
			try {
				const deletedToken =
					(await client
						.select()
						.from(verificationTokens)
						.where(
							and(
								eq(verificationTokens.identifier, token.identifier),
								eq(verificationTokens.token, token.token)
							)
						)
						.then((res) => res[0])) ?? null;

				await client
					.delete(verificationTokens)
					.where(
						and(
							eq(verificationTokens.identifier, token.identifier),
							eq(verificationTokens.token, token.token)
						)
					);

				return deletedToken;
			} catch {
				throw new Error('No verification token found.');
			}
		},
		deleteUser: async (id) => {
			await Promise.all([
				client.delete(users).where(eq(users.id, id)),
				client.delete(sessions).where(eq(sessions.userId, id)),
				client.delete(accounts).where(eq(accounts.userId, id))
			]);

			return null;
		},
		unlinkAccount: async (account) => {
			await client
				.delete(accounts)
				.where(
					and(
						eq(accounts.providerAccountId, account.providerAccountId),
						eq(accounts.provider, account.provider)
					)
				);

			return undefined;
		}
	};
}
