import test from 'ava'

import {
  createWorkout,
  getMuscleSpecificVolumeOfWorkout,
  getTotalVolumeOfWorkout,
  Workout,
} from './workout'

test('Calculate the total volume of a workout correctly.', (t) => {
  const workout: Workout = {
    id: '1',
    datePerformed: '2021-01-01',
    activities: [
      {
        type: 'sri',
        sets: 3,
        reps: 5,
        weight: { value: 100, unit: 'kg' },
        intensity: 80,
        exercise: {
          id: '1',
          name: 'Barbell Squat - Standard',
          simplifiedName: 'Squat',
          mainMuscleGroup: 'Thighs',
          muscles: ['Thighs'],
          slug: 'barbell-squat',
          otherMuscleGroups: [],
          allowedMethods: ['sri'],
        },
      },
      {
        type: 'sri',
        sets: 5,
        reps: 5,
        weight: { value: 20, unit: 'kg' },
        intensity: 80,
        exercise: {
          id: '2',
          name: 'Dumbbell curls',
          simplifiedName: 'Curls',
          mainMuscleGroup: 'Arms',
          muscles: ['Arms'],
          slug: 'barbell-squat',
          otherMuscleGroups: [],
          allowedMethods: ['sri'],
        },
      },
    ],
    owner: '1',
  }

  t.is(getTotalVolumeOfWorkout(workout), 2)
  t.is(getMuscleSpecificVolumeOfWorkout(workout, 'Arms'), 0.5)
  t.is(getMuscleSpecificVolumeOfWorkout(workout, 'Thighs'), 1.5)
})

test('Allow creation of workout that is valid', (t) => {
  const workout = createWorkout('1')
  t.is(workout.owner, '1')
  t.is(workout.activities.length, 0)
  t.is(workout.id.length, 36)
})
