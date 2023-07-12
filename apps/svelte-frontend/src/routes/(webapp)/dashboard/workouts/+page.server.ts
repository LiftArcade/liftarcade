import { workout } from '@liftarcade/services-database';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { requireAuth } from '$lib/utils/auth';

export const load = (async (event) => {
	const session = await event.locals.getSession();
	const user = session?.user;

	try {
		if (!user || !user.id) throw new Error('No user found');

		const returnedWorkouts = await event.locals.drizzleDB
			.select()
			.from(workout)
			.where(eq(workout.owner_id, user?.id))
			.orderBy(desc(workout.performed_at))
			.limit(10);

		return {
			workouts: returnedWorkouts
		};
	} catch {
		return {
			status: 401,
			error: 'Not authorized'
		};
	}
}) satisfies PageServerLoad;
