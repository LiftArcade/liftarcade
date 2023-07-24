// Here we can specify the types for JSON values inserted into the database.
// This allows for type inference when querying the database.

// From the docs:
// You can specify .$type<..>() for json object inference, it won't check runtime values.
// It provides compile time protection for default values, insert and select schemas.

import z from "zod";

const Exercise = z.object({
  id: z.string(),
  name: z.string(),
  commonName: z.array(z.string()),
  mainMuscleGroup: z.string(),
  otherMuscleGroups: z.array(z.string()),
  difficulty: z.string(),
  slug: z.string(),
});
export type Exercise = z.infer<typeof Exercise>;

const Activity = z.object({
  id: z.string(),
  type: z.string(),
  position: z.number(),
  sets: z.number().min(1).max(10),
  reps: z.number().min(1).max(30),
  weight: z.number().max(1000),
  weightUnit: z.enum(["kg", "lb"]),
  intensity: z.number().min(0).max(100), // A 0-100 scale.
  exercise: Exercise,
});
export type Activity = z.infer<typeof Activity>;
