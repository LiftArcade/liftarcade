// This file is currently required as opposed to direct export of the JSON file
// because if we use `export { default as exercises } from './exercises.json'`
// then the exercises are not typed on export.

// The same for regressions and reverse regressions.

import exercisesJSON from './exercises.json'
import regressionsJSON from './regressions.json'
import reverseRegressionsJSON from './reverse-regressions.json'

export type ExerciseType = typeof exercisesJSON
export const exercises = exercisesJSON as ExerciseType

export type RegressionsType = typeof regressionsJSON
export const regressions = regressionsJSON as RegressionsType

export type ReverseRegressionsType = typeof reverseRegressionsJSON
export const reverseRegressions =
  reverseRegressionsJSON as ReverseRegressionsType
