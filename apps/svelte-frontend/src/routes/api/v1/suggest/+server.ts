import {
	calculateSuggestionFromPR,
	convertWeight,
	estimatePrLevel,
	type Weight
} from '@liftarcade/exercises-lib';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const exercise = url.searchParams.get('exercise');
	const strengthLevel = url.searchParams.get('strLevel');
	const units = (url.searchParams.get('units') || 'lb') as Weight['unit'];
	const bodyWeight = url.searchParams.get('bodyWeight') || 0;

	try {
		// Validate the required query string parameters
		if (!exercise) throw error(501, 'Missing exercise');
		if (!strengthLevel) throw error(501, 'Missing strLevel');

		// If the user's body weight is in kg, convert it to lbs
		const convertedBodyWeight = convertWeight(
			{
				value: Number(bodyWeight),
				unit: units
			},
			'lb'
		);

		// Get the exercises regression data from the database
		const estimate = await estimatePrLevel(
			exercise,
			Number(strengthLevel),
			Number(convertedBodyWeight)
		);

		const suggestionsArray = [];

		for (let s = 1; s < 7; s++) {
			for (let r = 1; r < 16; r++) {
				suggestionsArray.push({
					s,
					r,
					suggestion: calculateSuggestionFromPR(s, r, estimate)
				});
			}
		}

		return new Response(JSON.stringify(suggestionsArray), {
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'private, max-age=3600, s-maxage=86400'
			}
		});
	} catch (err) {
		return new Response(err.message);
	}
};
