import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const currentUserProfile = locals.getSession().then((session) => {
		return {
			id: session?.user?.id,
			name: session?.user?.name,
			email: session?.user?.email,
			image: session?.user?.image
		};
	});

	return {
		promised: {
			currentUserProfile
		}
	};
};
