import { userProfile, workout } from '@liftarcade/services-database';
import { and, gte, eq, desc } from 'drizzle-orm';
import { typeid } from 'typeid-js';

export const load = async ({ locals }) => {
	const recentWorkouts = locals.getSession().then((session) => {
		if (!session) throw new Error('No session found');
		const user = session.user;

		const currentDate = new Date();
		const dateFromSeverDaysPrior = new Date(currentDate.getDate() - 7);

		return locals.drizzleDB
			.select()
			.from(workout)
			.where(and(eq(workout.owner_id, user.id), gte(workout.performed_at, dateFromSeverDaysPrior)))
			.orderBy(desc(workout.performed_at))
			.limit(10);
	});

	// async function getRecentWorkoutVolume() {
	// 	let totalVolume = 0;

	// 	for (const workout of recentWorkouts) {
	// 		for (const exercise of workout.activitiesJSON) {
	// 			totalVolume += exercise.sets * exercise.reps;
	// 		}
	// 	}

	// 	return totalVolume;
	// }

	return {
		promiseData: {
			recentWorkouts
		},
		recentWorkoutVolume: '2'
		// userProfile: createdOrSelectedUserProfile
	};
};
