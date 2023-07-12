import type { Session } from '@auth/core/types';
import type { getSession } from '@auth/sveltekit';

/**
 * Takes a session and throws an error if there is no user and user.id.
 * @param session The session object from getSession()
 */
export const requireAuth = async (session: Awaited<ReturnType<typeof getSession>>) => {
	try {
		const resultedSession = await session;
		if (!resultedSession) throw new Error('No user found');

		const user = resultedSession.user;
		if (!user) throw new Error('No user found in the session variable');
		if (!user.id) throw new Error('No user id exists');

		return true;
	} catch {
		throw new Error('Not authorized');
	}
};
