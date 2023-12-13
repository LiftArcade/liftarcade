/**
 * Used to estimate a persons One Rep Max if there is no true value known.
 * @param sets Number of sets used
 * @param reps Number of reps used
 * @param weightUsed Number of weight used
 * @returns Estimate value of a persons One Rep Max.
 */

function calculateOneRepMax(
  sets: number,
  reps: number,
  weightUsed: number
): number {
  const suggestedPR =
    weightUsed / ((1.0278 - 0.0278 * reps) * (1 / sets ** 0.125))
  return suggestedPR > 0 ? suggestedPR : 0
}

export default calculateOneRepMax
