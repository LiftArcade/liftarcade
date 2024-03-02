import lodash from "lodash";
import { PolynomialRegression } from "ml-regression-polynomial";
import regressionJSON from "./regressions.json";

/**
 * EstimatePR
 * @param exerciseID The exercise ID from the database. Uniquely identifies the exercise.
 * @param strLevel 0-100 float that represents the users strength level.
 * @param weight The user's weight.
 * @returns Return a float that represents the estimated one rep max for the user.
 */
export const estimatePrLevel = async (
  exerciseID: string,
  stringLevel: number,
  weight: number
): Promise<number> => {
  if (typeof exerciseID !== "string")
    throw new Error("Exercise must by a string");

  if (typeof stringLevel !== "number" || stringLevel < 0 || stringLevel > 100)
    throw new Error("Strength level must be a number 0 - 100");

  if (typeof weight !== "number")
    throw new Error("Weight must be in pounds from 0 - 330");

  // Weight must be 110 - 330
  // If not given, "0" uses a general calculation.
  const w = weight ? lodash.round(lodash.clamp(weight, 110, 310), -1) : 0;

  const regression = regressionJSON.regressions.find(
    (r) => r.id === exerciseID && r.weight === w.toString()
  );

  if (!regression) throw new Error("Not able to find that regression:");
  const formula = PolynomialRegression.load(regression.regression);
  return lodash.round(formula.predict(stringLevel), 2);
};
