import { workout } from '@liftarcade/services-database';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const recentWorkouts = event.locals.getSession().then((session) => {
		const user = session?.user;
		if (!user || !user.id) throw new Error('No user found');

		return event.locals.drizzleDB
			.select()
			.from(workout)
			.where(eq(workout.owner_id, user.id))
			.orderBy(desc(workout.performed_at))
			.limit(10);
	});

	return {
		promiseData: {
			recentWorkouts
		}
	};
}) satisfies PageServerLoad;
