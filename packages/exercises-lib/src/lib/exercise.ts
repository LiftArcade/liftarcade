import { MuscleGroup } from './muscle'

export type Exercise = {
  id: string
  name: string
  simplifiedName?: string // This is the name of the exercise that is immediately recognizable to the user. For example, "Bench Press" is the simplified name of "Barbell Bench Press".
  muscles: MuscleGroup[]
  otherMuscleGroups: MuscleGroup[] | null
  allowedMethods: AllowedMethods[] // Eventually, this will be used to identify what types of activity can be performed with this exercise.
  //     equipment?: Equipment;
  //     difficulty:
  //     | 'Novice'
  //     | 'Beginner'
  //     | 'Intermediate'
  //     | 'Advanced'
  //     | 'Elite';
  slug: string
  mainMuscleGroup: MuscleGroup
}

// Export declare type Equipment =
//   | 'Barbell'
//   | 'Dumbbell'
//   | 'Machine'
//   | 'Body'
//   | 'Pullup Bar'
//   | 'EZ Curl Bar';

export type AllowedMethods = string
