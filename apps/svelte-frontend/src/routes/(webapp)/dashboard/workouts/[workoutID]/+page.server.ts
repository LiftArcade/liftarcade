import { workout } from '@liftarcade/services-database';
import { error, type Actions, redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';

function encodeUUID(id: string) {
	return `workout_${id}`;
}

export const load = async (event) => {
	const user = event.locals.user;
	const database = await event.locals.drizzleDB;

	if (!user || !user.id) error(401, 'User is not logged in');

	const returnedWorkout = await database
		.select()
		.from(workout)
		.where(and(eq(workout.owner_id, user.id), eq(workout.id, encodeUUID(event.params.workoutID))))
		.limit(1);

	return {
		workout: returnedWorkout[0]
	};
};

export const actions = {
	delete: async ({ locals, request }) => {
		const formData = await request.formData();
		const workoutID = formData.get('workoutID');
		const currentUserID = locals.user?.id;

		if (!workoutID) return error(400, 'No workoutID provided');

		// If session is not available, then the user is not logged in.
		if (!currentUserID) return error(401, 'Not Authorized');

		// This only deletes for the current user, preventing users from deleting other workouts.

		const result = await locals.drizzleDB
			.delete(workout)
			.where(and(eq(workout.owner_id, currentUserID), eq(workout.id, workoutID.toString())))
			.returning();
		if (result[0].id) return redirect(303, '/dashboard/workouts');

		return error(500, 'Error deleting workout, unknown issues.');
	}
} satisfies Actions;
