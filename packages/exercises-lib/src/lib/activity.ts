import { Exercise } from './exercise'

/**
 * Activities can be different types.
 *
 * The first and most basic type is a set / rep scheme.
 * For example, 3 sets of 10 reps at 100 lbs at 80% intensity.
 */
type SetRepIntensityActivity = {
  type: 'sri' // Set / Rep / Intensity
  position: number // 0-20
  sets: number // 1-100
  reps: number // 1-100
  weight: number
  weightUnit: string
  intensity: number // 0-100
  exercise: Exercise
}

export type Activity = SetRepIntensityActivity
