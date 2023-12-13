import test from 'ava'

enum MuscleGroup {
  Barbell = 'Barbell',
  Back = 'Back',
  Arms = 'Arms',
  Legs = 'Legs',
}

enum MAJOR_MUSCLE_GROUPS {
  Arms = 'Arms',
  Chest = 'Chest',
  Back = 'Back',
  Glutes = 'Glutes',
  Legs = 'Legs',
  Core = 'Core',
}

import { exercises } from './exercises.json'

test('should have the correct main muscle group', (t) => {
  for (const exercise of exercises) {
    console.log(`Testing ${exercise.name}...`)
    t.true(
      Object.values(MAJOR_MUSCLE_GROUPS).includes(
        exercise.mainMuscleGroup as MAJOR_MUSCLE_GROUPS
      )
    )
  }
})
