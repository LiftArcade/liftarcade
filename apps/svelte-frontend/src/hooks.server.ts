import { sequence } from '@sveltejs/kit/hooks';
import { dbClient } from '$lib/utils/db';
import { lucia } from '$lib/utils/auth';
import type { Handle } from '@sveltejs/kit';

const attachDatabaseServerHandle = (async ({ event, resolve }) => {
	const drizzleDB = dbClient;
	event.locals.drizzleDB = drizzleDB;
	const response = await resolve(event);
	return response;
}) satisfies Handle;

const authHandle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(lucia.sessionCookieName);
	if (!sessionId) {
		event.locals.user = undefined;
		event.locals.session = undefined;
		return resolve(event);
	}

	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		// sveltekit types deviates from the de-facto standard
		// you can use 'as any' too
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}
	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}
	event.locals.user = user || undefined;
	event.locals.session = session || undefined;
	return resolve(event);
};

export const handle = sequence(attachDatabaseServerHandle, authHandle);
