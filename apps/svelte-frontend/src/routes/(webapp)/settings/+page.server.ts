import type { PageServerLoad } from './$types';
import { lucia } from '$lib/utils/auth';
import { redirect, fail, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		id: locals.user?.id
	};
};

export const actions = {
	default: async (event) => {
		console.log('Fired');

		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/signin');
	}
} satisfies Actions;
