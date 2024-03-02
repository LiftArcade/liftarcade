import test from "ava";

import {
  getMuscleSpecificVolumeOfWorkout,
  getTotalVolumeOfWorkout,
  Workout,
} from "./workout";

test("Calculate the total volume of a workout correctly.", (t) => {
  const workout: Workout = {
    performedAt: "2021-01-01",
    activities: [
      {
        type: "sri",
        position: 1,
        sets: 3,
        reps: 5,
        weight: { value: 100, unit: "kg" },
        intensity: 80,
        exercise: {
          id: "1",
          name: "Barbell Squat - Standard",
          simplifiedName: "Squat",
          mainMuscleGroup: "Thighs",
          muscles: ["Thighs"],
          slug: "barbell-squat",
          otherMuscleGroups: [],
          allowedMethods: ["sri"],
        },
      },
      {
        type: "sri",
        sets: 5,
        position: 2,
        reps: 5,
        weight: { value: 20, unit: "kg" },
        intensity: 80,
        exercise: {
          id: "2",
          name: "Dumbbell curls",
          simplifiedName: "Curls",
          mainMuscleGroup: "Arms",
          muscles: ["Arms"],
          slug: "barbell-squat",
          otherMuscleGroups: [],
          allowedMethods: ["sri"],
        },
      },
    ],
  };

  t.is(getTotalVolumeOfWorkout(workout), 2);
  t.is(getMuscleSpecificVolumeOfWorkout(workout, "Arms"), 0.5);
  t.is(getMuscleSpecificVolumeOfWorkout(workout, "Thighs"), 1.5);
});
