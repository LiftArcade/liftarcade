import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.getSession();
	const user = session?.user;

	const currentUserProfile = {
		id: user?.id,
		name: user?.name,
		email: user?.email,
		image: user?.image
	};

	return {
		currentUserProfile
	};
};
