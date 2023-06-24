import { dbForServerHandle } from '$lib/utils/db';
import type { Handle } from '@sveltejs/kit';
// import { auth } from "$lib/server/lucia";
import { sequence } from '@sveltejs/kit/hooks';

export const dbServerHandle = (async ({ event, resolve }) => {
	const drizzleDB = dbForServerHandle;
	event.locals = { drizzleDB };
	const response = await resolve(event);
	return response;
}) satisfies Handle;

// export const authHandle = (async ({ event, resolve }) => {
// 	event.locals.auth = auth.handleRequest(event);
// 	return await resolve(event);
// }) satisfies Handle;

export const handle = sequence(dbServerHandle);
