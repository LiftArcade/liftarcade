import test from 'ava'
import { convertWeight } from './weight'

// First test should make sure that the conversion table is correct and we can convert between units.
test('convertWeight', (t) => {
  t.is(convertWeight({ value: 100, unit: 'kg' }, 'kg'), 100)
  t.is(convertWeight({ value: 100, unit: 'kg' }, 'lb'), 220.462_262_18)
  t.is(convertWeight({ value: 100, unit: 'lb' }, 'kg'), 45.359_237_001_003_54)
  t.is(convertWeight({ value: 100, unit: 'lb' }, 'lb'), 100)
})
