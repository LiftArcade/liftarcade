import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { workout } from '@liftarcade/services-database';

export const POST: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();
	const drizzleDB = locals.drizzleDB;
	const session = await locals.session;

	if (!session?.userId) return json({ message: 'error', error: 'User is not logged in' });

	// Create a transation that creates a new workout, and updates the user profile to have one more workout.
	try {
		// const returnedWorkout = await drizzleDB.transaction(async (trx) => {
		// 	const newWorkoutID = typeid('workout').toString();
		// 	// Split up all the acitivites to be saved individually
		// 	const userProfileForUser = await trx
		// 		.select()
		// 		.from(userProfile)
		// 		.where(eq(userProfile.owner_id, session?.userId || ''));
		// 	if (!session?.userId) throw new Error('User is not logged in`');
		// 	await trx
		// 		.insert(workout)
		// 		.values({
		// 			id: newWorkoutID,
		// 			owner_id: session.userId,
		// 			activitiesJSON: data.activities,
		// 			performed_at: formattedDate
		// 		})
		// 		.returning();
		// 	await trx
		// 		.update(userProfile)
		// 		.set({ numberOfWorkouts: sql`${userProfileForUser[0].numberOfWorkouts} + 1` })
		// 		.where(eq(userProfile.owner_id, session.userId));
		// });

		const returnedWorkout = await drizzleDB
			.insert(workout)
			.values({
				owner_id: session.userId,
				activitiesJSON: data.activities,
				performed_at: data.performed_at
			})
			.returning();
		return json({ message: 'ok', workout: returnedWorkout });
	} catch (error) {
		console.error(error);
		return json({ message: 'error', error });
	}
};
