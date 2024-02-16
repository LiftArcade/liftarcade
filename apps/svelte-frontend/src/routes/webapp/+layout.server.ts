import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const user = event.locals.getSession().then((session) => session?.user);

	return {
		promised: {
			user
		}
	};
};
