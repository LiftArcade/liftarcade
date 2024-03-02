import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.session;
	if (session?.userId) redirect(302, '/dashboard');
};
