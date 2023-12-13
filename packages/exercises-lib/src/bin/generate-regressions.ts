/* eslint-disable unicorn/prefer-top-level-await */
import { open } from 'node:fs/promises'
import database from '../lib/exercises.json'

// This takes a master exercise / regression / reverse regression database
// and generates a JSON file with the exercises, regressions, and reverse regressions
// split into smaller files for faster look-up on server.

const finalRegression: Record<string, any>[] = []
const finalReverseRegression: Record<string, any>[] = []
const finalExercises: Record<string, any>[] = []

for (const [key, exercise] of Object.entries(database.exercises)) {
  const { id, regressions, name } = exercise as any
  if (!regressions) continue

  for (const [key, value] of Object.entries(regressions)) {
    if (!value) continue
    if (key === 'name') continue

    finalRegression.push({
      id,
      name,
      weight: key,
      regression: value,
    })
  }
}

open('./regressions.json', 'w').then((file) => {
  file.write(
    JSON.stringify({
      name: 'Regressions',
      version: '1.0.0',
      dateCreated: new Date().toISOString(),
      regressions: finalRegression,
    })
  )
  file.close()
})

for (const [key, exercise] of Object.entries(database.exercises)) {
  const { id, reverseRegression, name } = exercise as any
  if (!reverseRegression) continue

  for (const [key, value] of Object.entries(reverseRegression)) {
    if (!value) continue
    if (key === 'name') continue

    finalReverseRegression.push({
      id,
      name,
      weight: key,
      regression: value,
    })
  }
}

open('./reverse-regressions.json', 'w').then((file) => {
  file.write(
    JSON.stringify({
      name: 'Reverse regressions',
      version: '1.0.0',
      dateCreated: new Date().toISOString(),
      regressions: finalReverseRegression,
    })
  )
  file.close()
})

// For (const [key, exercise] of Object.entries(database.exercises)) {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { regressions, reverseRegression, exerciseTable, active, ...rest } =
//     exercise
//   finalExercises.push({
//     ...rest,
//   })
// }

// open('./exercises.json', 'w').then((file) => {
//   file.write(
//     JSON.stringify({
//       name: 'Exercises',
//       version: '1.0.0',
//       dateCreated: new Date().toISOString(),
//       exercises: finalExercises,
//     })
//   )
//   file.close()
// })
