<script lang="ts">
	import { workout } from '$lib/stores/workout.store';
	import type { Workout } from '@liftarcade/exercises-lib';
	import { ChevronDown, ChevronUp, Trash } from 'svelte-heros';
	export let activity: Workout['activities'][0];

	type SuggestionData = Array<{
		s: number;
		r: number;
		suggestion: number;
	}>;

	let suggestion: string = '';
	let suggestionArray = [] as SuggestionData;

	fetch(`/api/v1/suggest?exercise=${activity.exercise.id}&strLevel=${38}`)
		.then((res) => res.json())
		.then((data) => {
			suggestionArray = data;
		})
		.then((res) => res)
		.catch((err) => console.error(err));

	$: {
		suggestion = Math.round(
			suggestionArray.find((s) => s.s === activity.sets && s.r === activity.reps)?.suggestion || 0
		).toString();
	}
</script>

<fieldset class="p-4 flex space-x-2 items-center">
	<div class="flex flex-col space-y-0.5 text-gray-700">
		<button
			on:click={() => workout.moveActivityOneUp(activity)}
			class="hover:bg-gray-100 p-1 rounded-md"><ChevronUp class=" h-4 w-4" /></button
		>
		<button
			on:click={() => workout.moveActivityOneDown(activity)}
			class="hover:bg-gray-100 p-1 rounded-md"><ChevronDown class="h-4 w-4 text-gray-700" /></button
		>
	</div>
	<div class="flex grow font-bold text-2xl">{activity.exercise?.name}</div>
	<input type="number" bind:value={activity.sets} />
	<input type="number" bind:value={activity.reps} />
	<input type="number" bind:value={activity.weight} />
	<input type="number" bind:value={activity.intensity} />
	<div class="w-24 tabular-nums text-right">{suggestion}</div>
	<button on:click={() => workout.removeActivity(activity)}>
		<Trash class="text-gray-500 hover:text-rose-600" />
	</button>
</fieldset>

<style lang="postcss">
	input {
		@apply border bg-gray-50 dark:bg-gray-900 dark:border-gray-800 rounded-md h-9 px-3 w-24 text-right;

		@apply focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-950;
	}
</style>
