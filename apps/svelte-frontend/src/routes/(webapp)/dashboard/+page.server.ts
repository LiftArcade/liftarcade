import { workout } from '@liftarcade/services-database';
import { redirect } from '@sveltejs/kit';
import { and, gte, eq, desc } from 'drizzle-orm';

export const load = async ({ locals }) => {
	const session = await locals.getSession();

	const user = await session?.user;

	if (!user || !user.id) throw redirect(301, '/signin');

	const currentDate = new Date();
	const dateFromSeverDaysPrior = new Date(currentDate.getDate() - 7);

	const recentWorkouts = await locals.drizzleDB
		.select()
		.from(workout)
		.where(and(eq(workout.owner_id, user.id), gte(workout.performed_at, dateFromSeverDaysPrior)))
		.orderBy(desc(workout.performed_at))
		.limit(10);

	const calculateRecentWorkoutVolume = () => {
		let totalVolume = 0;

		for (const workout of recentWorkouts) {
			for (const exercise of workout.activitiesJSON) {
				totalVolume += exercise.sets * exercise.reps;
			}
		}

		return totalVolume;
	};

	return {
		workouts: recentWorkouts,
		recentWorkoutVolume: calculateRecentWorkoutVolume()
	};
};
