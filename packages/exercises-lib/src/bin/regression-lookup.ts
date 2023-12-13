import database from '../../regressions.json'

const id = 'eed587d5-dc62-4312-87e5-0f32a71a8fc3'
const weight = '0'

console.log(
  database.regressions.find((r) => r.id === id && r.weight === weight)
)
