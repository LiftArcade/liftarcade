import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { workout, activity } from '@liftarcade/services-database';
import { nanoid } from '$lib/utils/nanoId';
import { typeid } from 'typeid-js';
import { and, eq, type InferModel } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();
	const drizzleDB = locals.drizzleDB;
	const session = await locals.getSession();

	const formattedDate = new Date(data.performed_at);

	try {
		const returnedWorkout = await drizzleDB.transaction(async (trx) => {
			const newWorkoutID = typeid('workout').toString();
			// Split up all the acitivites to be saved individually
			const splitAcitivites: InferModel<typeof activity, 'insert'>[] = await data.activities.map(
				(act: InferModel<typeof activity, 'insert'>) => {
					const newActivity: InferModel<typeof activity, 'insert'> = {
						id: typeid('activity').toString(),
						owner_id: session?.user?.id as string,
						workout_id: newWorkoutID,
						exerciseID: act.exerciseID,
						performedAt: formattedDate,
						position: act.position,
						weight: act.weight || 0,
						weightUnit: act.weightUnit || 'lb',
						reps: act.reps || 0,
						sets: act.sets || 0,
						intensity: act.intensity || 0
					};
					return newActivity;
				}
			);
			const combinedWorkout = await trx
				.insert(workout)
				.values({
					id: newWorkoutID,
					public_id: nanoid(),
					owner_id: session?.user?.id as string,
					activitiesJSON: data.activities,
					performed_at: formattedDate
				})
				.returning();
			await trx.insert(activity).values(splitAcitivites);
			return combinedWorkout;
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
	// Alos, this must be a transaction, because I don't use foreign keys, we must also delete the activities.
	try {
		await drizzleDB.transaction(async (trx) => {
			if (!session?.user?.id) throw new Error('User is not logged in`');
			const workoutToDelete = await trx
				.delete(workout)
				.where(and(eq(workout.owner_id, session?.user?.id), eq(workout.public_id, data.id)))
				.returning();
			const activitiesToDelete = await trx
				.delete(activity)
				.where(
					and(
						eq(activity.workout_id, workoutToDelete[0].id),
						eq(activity.owner_id, session?.user?.id)
					)
				);
		});
		return json({ message: 'ok' });
	} catch (error) {
		return json({ message: 'error', error });
	}
};
