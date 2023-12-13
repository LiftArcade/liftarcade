import { Profile } from './profile'

function selectAdaptedLevel(
  exerciseID: string,
  muscle: string,
  userStrengthProfile: Profile
): number {
  // Attempt to find the exercise id in the user's strength profile.
  if (userStrengthProfile.virtualPrs) {
    const virtualPR = userStrengthProfile.virtualPrs.find(
      (pr) => pr.exerciseID === exerciseID
    )
    if (virtualPR?.weight?.value) return virtualPR.weight.value
  }

  if (userStrengthProfile.muscleSpecificStrLvl) {
    const musclePR = userStrengthProfile.muscleSpecificStrLvl.find(
      (pr) => pr?.muscle === muscle
    )
    if (musclePR?.strLvl) return musclePR.strLvl
  }

  if (userStrengthProfile.baseStrLvl) return userStrengthProfile.baseStrLvl

  throw new Error('Unable to find anything.')
}

export default selectAdaptedLevel
