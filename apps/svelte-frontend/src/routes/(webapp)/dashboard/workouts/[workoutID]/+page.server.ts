import { workout } from '@liftarcade/services-database';
import { and, eq } from 'drizzle-orm';
import { TypeID } from 'typeid-js';

function encodeUUID(id: string) {
	return `workout_${id}`;
}

export const load = async (event) => {
	const session = await event.locals.getSession();
	const user = session?.user;
	const database = await event.locals.drizzleDB;

	try {
		if (!user?.id) throw new Error('You must be logged in to view this page.');
		const returnedWorkout = await database
			.select()
			.from(workout)
			.where(and(eq(workout.owner_id, user.id), eq(workout.id, encodeUUID(event.params.workoutID))))
			.limit(1);

		return {
			workout: returnedWorkout[0]
		};
	} catch {
		throw new Error(' something went wront loading the data.');
	}
};
