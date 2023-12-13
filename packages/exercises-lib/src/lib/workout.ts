import { v4 as uuidv4 } from 'uuid'

import type { Activity } from './activity'
import { MuscleGroup } from './muscle'
import { convertWeight } from './weight'

export type Workout = {
  performedAt: string // ISO 8601
  name?: string
  activities: Activity[]
  notes?: string
}

/**
 * Calculates the total volume of the workout performed.
 * @param workout
 * @returns
 */
export function getTotalVolumeOfWorkout(workout: Workout): number {
  return (
    workout.activities.reduce(
      (total, activity) =>
        total +
        activity.sets * activity.reps * convertWeight(activity.weight, 'kg'),
      0
    ) / 1000
  )
}

export function getMuscleSpecificVolumeOfWorkout(
  workout: Workout,
  muscle: MuscleGroup
) {
  return (
    // eslint-disable-next-line unicorn/no-array-reduce
    workout.activities.reduce((total, activity) => {
      if (activity.exercise.muscles.includes(muscle)) {
        return (
          total +
          activity.sets * activity.reps * convertWeight(activity.weight, 'kg')
        )
      }

      return total
    }, 0) / 1000
  )
}

// Allow user to create a new workout.
export function createWorkout(owner: string): Workout {
  return {
    id: uuidv4(),
    datePerformed: new Date().toISOString(),
    activities: [],
    owner,
  }
}
