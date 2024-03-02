import type { Exercise } from "./exercise";
import type { Weight } from "./weight";

// Types of activities that can be performed in a workout.
// Currently supported types are only:
// - Set / Rep / Intensity "sri"
interface BaseActivity {
  type: string;
}

/**
 * Activities can be different types.
 *
 * The first and most basic type is a set / rep scheme.
 * For example, 3 sets of 10 reps at 100 lbs at 80% intensity.
 */
interface SetRepIntensityActivity extends BaseActivity {
  type: "sri"; // Set / Rep / Intensity
  position: number; // 0-20
  sets: number; // 1-100
  reps: number; // 1-100
  weight: Weight;
  intensity: number; // 0-100
  exercise: Exercise;
}

export type Activity = SetRepIntensityActivity;
