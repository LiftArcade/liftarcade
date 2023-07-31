import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { workout, userProfile } from '@liftarcade/services-database';
import { typeid } from 'typeid-js';
import { and, eq, sql } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();
	const drizzleDB = locals.drizzleDB;
	const session = await locals.getSession();

	const formattedDate = new Date(data.performed_at);

	// Create a transation that creates a new workout, and updates the user profile to have one more workout.
	try {
		const returnedWorkout = await drizzleDB.transaction(async (trx) => {
			const newWorkoutID = typeid('workout').toString();
			// Split up all the acitivites to be saved individually
			const userProfileForUser = await trx
				.select()
				.from(userProfile)
				.where(eq(userProfile.owner_id, session?.user?.id || ''));
			if (!session?.user?.id) throw new Error('User is not logged in`');
			await trx
				.insert(workout)
				.values({
					id: newWorkoutID,
					public_id: typeid('workoutpublic').toString(),
					owner_id: session?.user?.id as string,
					activitiesJSON: data.activities,
					performed_at: formattedDate
				})
				.returning();
			await trx
				.update(userProfile)
				.set({ numberOfWorkouts: sql`${userProfileForUser[0].numberOfWorkouts} + 1` })
				.where(eq(userProfile.owner_id, session?.user?.id));
		});
		return json({ message: 'ok', workout: returnedWorkout });
	} catch (error) {
		console.error(error);
		return json({ message: 'error', error });
	}
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();
	const drizzleDB = locals.drizzleDB;
	const session = await locals.getSession();

	// Guards - ID must exist of workout, and user must own that workout to be able to delete it.
	// Create a transation that creates a new workout, and updates the user profile to have one more workout.
	try {
		const returnedWorkout = await drizzleDB.transaction(async (trx) => {
			const userProfileForUser = await trx
				.select()
				.from(userProfile)
				.where(eq(userProfile.owner_id, session?.user?.id || ''));
			if (!session?.user?.id) throw new Error('User is not logged in`');
			const deletedRecord = await trx
				.delete(workout)
				.where(and(eq(workout.owner_id, session?.user?.id), eq(workout.id, data.id)))
				.returning();
			if (deletedRecord.length === 0) trx.rollback();
			await trx
				.update(userProfile)
				.set({ numberOfWorkouts: sql`${userProfileForUser[0].numberOfWorkouts} - 1` })
				.where(eq(userProfile.owner_id, session?.user?.id));
		});
		return json({ message: 'ok', workout: returnedWorkout });
	} catch (error) {
		return json({ message: 'error', error });
	}
};
