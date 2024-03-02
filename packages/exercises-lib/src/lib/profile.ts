import type { MuscleGroup } from "./muscle";
import type { Weight } from "./weight";

// Personal Records (PR) are the best weights that a user has lifted for a given exercise.
// Using this data, we can individualize the recommended weights for a user down to the user.
type PersonalRecord = {
  exerciseID: string; // The ID of the exercise.
  weight: Weight;
};

type MuscleSpecificStringLvl = {
  muscle: MuscleGroup;
  strLvl: number; // 0-100 Marks the relative level of strength of the user in the muscle group.
};

// In the Profile, we have a list of real PRs, a list of virtual PRs, a list of muscle specific strength levels, and a base strength level.
export type Profile = {
  realPrs: PersonalRecord[];
  virtualPrs: PersonalRecord[];
  muscleSpecificStrLvl: MuscleSpecificStringLvl[];
  baseStrLvl: number; // 0-100 Marks the relative level of strength of the user.
};

import { estimatePrLevel } from "./regression";
import { estimateStrengthLevel } from "./reverse-regression";

const MAJOR_MUSCLE_GROUPS = ["Arms", "Chest", "Back", "Glutes", "Legs", "Core"];

/**
 * Given a list of personal records, this builds an internal representation of the strength profile.
 * @param prs The list of personal records.
 */

// Example Input of Personal records:
// ...
// {
//      "id": "1",
//      "exercise": "Squat",
//      "weight": "100",
//  }
// ...

// Example Output of Strength Profile:
// ...
// {
//      "id": "1",
//      "exercise": "Squat",
//      "weight": 100,
//      "level": 20,
//      "generalLevel: 20,
//      "muscleLevel": 20,
//  }
// ...
// interface StrengthProfile {
//  id: string
//  exercise: string
//  weight: string
//  level: number
//  generalLevel: number
//  muscleLevel: number
// }
const DEFAULT_USER_WEIGHT = 180;
const INCREMENT_VALUE = 1;

export default class StrengthProfile {
  public personalRecords: PersonalRecord[] = [];

  public userWeight;

  private coreLevel = 0;

  private muscleLevels: Record<string, number> = {};

  public constructor(prs: PersonalRecord[], userWeight?: number) {
    this.personalRecords = prs;
    this.userWeight = userWeight ?? DEFAULT_USER_WEIGHT;
    this.calculateCoreLevel();
    // This.calculateMuscleLevels();
    console.debug(this);
  }

  private calculateCoreLevel(): void {
    // Sets the base of corelevel to evenrtually addto and average.
    let averageLevel = 0;
    let count = 0;

    // Iterates through each supplied Personal Record.
    for (const pr of this.personalRecords) {
      const { exerciseID, weight } = pr;
      if (!exerciseID || !weight) return;

      estimateStrengthLevel(exerciseID, weight.value, {
        value: this.userWeight,
        unit: "lb",
      }).then((result) => {
        averageLevel += result; // Add it to the average.
        count += INCREMENT_VALUE; // Increment the count.
      });
    }

    // Divide the average by the number of personal records to get the core level.
    this.coreLevel = averageLevel / count;
  }

  // Private calculateMuscleLevels(): void {
  //   // Create a temporary collection of muscle groups and their levels.
  //   // This will go on the be averaged at the end.
  //   const temporaryMuscleCollection = new Map<string, number[]>();

  //   // Iterates through each supplied Personal Record.
  //   for (const pr of this.personalRecords) {
  //     const { id, weight } = pr;

  //     // Find the exercise that matches the personal record.
  //     if (!id) return;
  //     const exercise = getExercise(id);

  //     // If the exercise has a table, use it to calculate the level.
  //     try {
  //       if (exercise.exerciseTable) {
  //         const estimate = estimateStrengthLevel(
  //           exercise.exerciseTable,
  //           weight ?? 0,
  //           this.userWeight
  //         );
  //         temporaryMuscleCollection.set(exercise.mainMuscleGroup, [
  //           ...(temporaryMuscleCollection.get(exercise.mainMuscleGroup) ?? []),
  //           estimate
  //         ]);
  //       }
  //     } catch {
  //       console.error('Error calculating level for the muscle section');
  //     }
  //   }

  // Iterate through the temporary collection and average the levels.
  // for (const [muscle, levels] of temporaryMuscleCollection) {
  //   this.muscleLevels[muscle] = levels.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   );
  // }

  public async predict(exerciseID: string): Promise<number> {
    const estimate = await estimatePrLevel(
      exerciseID,
      this.coreLevel,
      this.userWeight
    );

    return estimate;
  }
}
