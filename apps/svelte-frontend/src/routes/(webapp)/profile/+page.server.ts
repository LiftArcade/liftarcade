import { workout } from '@liftarcade/services-database';

export const load = async (event) => {
	const workouts = event.locals.drizzleDB.select().from(workout);

	return {
		workouts
	};
};
