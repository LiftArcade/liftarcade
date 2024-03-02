/**
 * Display the correct weight for the user based on their preferences.
 *
 * TODO: add a weight output setting for the user.
 */

import { convertWeight, type Weight } from '@liftarcade/exercises-lib';

/**
 * Display the correct weight for the user based on their preferences.
 * @param weight - A Weight object with the value and units.
 * @returns - A Weight object with the value and units.
 */

export function displayWeight(weight: Weight): Weight {
	return convertWeight(weight, 'lb');
}
