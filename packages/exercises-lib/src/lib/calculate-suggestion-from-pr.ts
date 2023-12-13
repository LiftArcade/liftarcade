function calculateSuggestionFromPR(
  sets: number,
  reps: number,
  pr: number
): number {
  // Version 1
  // Pros: Starter used the lombardi equation.
  // Cons: Drastically under suggested in lower set/rep schemes
  // return personalRecord * (1 / (sets * reps) ** 0.12);

  // Version 2
  const returnWeight = (1.0278 - 0.0278 * reps) * (1 / sets ** 0.125) * pr
  return returnWeight > 0 ? returnWeight : 0
}

export default calculateSuggestionFromPR
