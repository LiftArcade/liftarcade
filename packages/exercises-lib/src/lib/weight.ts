export type Unit = "kg" | "lb"; // Kg = kilogram, lb = pound

export type Weight = {
  value: number;
  unit: Unit;
};

const conversionTable: Record<Unit, number> = {
  kg: 1,
  lb: 2.204_622_621_8,
};

/** Accepts a Weight object and converts it to an Weight object. */
export function convertWeight(weight: Weight, unit: Unit): Weight {
  // Take the current weight and convert it to kgs using the conversion table.
  const weightInKgs = weight.value / conversionTable[weight.unit];

  // Then take the kgs and convert it to the new unit using the conversion table.
  return {
    value: weightInKgs * conversionTable[unit],
    unit: unit,
  };
}