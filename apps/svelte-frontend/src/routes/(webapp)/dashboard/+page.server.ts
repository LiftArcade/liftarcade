import { workout } from '@liftarcade/services-database';
import { error } from '@sveltejs/kit';
import { and, gte, eq, desc } from 'drizzle-orm';

export const load = async ({ locals }) => {
	const currentUser = locals.user;
	if (!currentUser) error(500, 'Internal Server Error');

	const currentDate = new Date();
	const dateFromSevenDaysPrior = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
		.toISOString()
		.split('T')[0];

	const recentWorkouts = locals.drizzleDB
		.select()
		.from(workout)
		.where(
			and(eq(workout.owner_id, currentUser.id), gte(workout.performed_at, dateFromSevenDaysPrior))
		)
		.orderBy(desc(workout.performed_at))
		.limit(10);

	return {
		recentWorkouts,
		recentWorkoutVolume: '2'
		// userProfile: createdOrSelectedUserProfile
	};
};
