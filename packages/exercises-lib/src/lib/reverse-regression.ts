import lodash from "lodash";
import { PolynomialRegression } from "ml-regression-polynomial";
import reverseRegressionJSON from "./reverse-regressions.json";
import { type Weight, convertWeight } from "./weight";

/**
 * This is only used to derive a strength level from a given max from an exercise.
 *
 * If you need to find a max from a strength level, use the normal derived table.
 *
 */

// TODO: Create a function that takes inputs and derives the strength level from the info.
export const estimateStrengthLevel = async (
  exerciseID: string,
  oneRepMax: number,
  bodyWeight: Weight
): Promise<number> => {
  if (typeof exerciseID !== "string")
    throw new Error("Exercise must by a string");

  if (typeof oneRepMax !== "number" || oneRepMax < 0 || oneRepMax > 1000)
    throw new Error("One rep max level must be a number 0 - 1000");

  if (typeof bodyWeight?.value !== "number")
    throw new Error("Weight must be in pounds from 0 - 310.");

  const weight = convertWeight(bodyWeight, "lb");

  // Weight must be 110 - 330
  // If not given, "0" uses a general calculation.
  const w = weight ? lodash.round(lodash.clamp(weight.value, 110, 310), -1) : 0;

  const regression = reverseRegressionJSON.regressions.find(
    (r) => r.id === exerciseID && r.weight === w.toString()
  );

  if (!regression) throw new Error("Not able to find that regression");

  const formula = PolynomialRegression.load(regression.regression);

  return lodash.round(lodash.clamp(formula.predict(oneRepMax), 0, 100), 2);
};
