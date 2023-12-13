import exerciseJSON from './exercises.json'

export function getExercise(id: string) {
  return exerciseJSON.exercises.find((exercise) => exercise.id === id)
}

export function getExerciseBySlug(slug: string) {
  return exerciseJSON.exercises.find((exercise) => exercise.slug === slug)
}
