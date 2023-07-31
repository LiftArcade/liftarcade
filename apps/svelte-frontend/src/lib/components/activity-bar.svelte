<script lang="ts">
	import { workout } from '$lib/stores/workout.store';
	import { ChevronDown, ChevronUp, Trash } from 'svelte-heros';
	import type { workout as DrizzleWorkout } from '@liftarcade/services-database';
	import type { InferModel } from 'drizzle-orm';
	export let activity: NonNullable<
		InferModel<typeof DrizzleWorkout, 'select'>['activitiesJSON']
	>[0];

	type SuggestionData = Array<{
		s: number;
		r: number;
		suggestion: number;
	}>;

	let suggestion = '';
	let suggestionArray = [] as SuggestionData;

	fetch(`/api/v1/suggest?exercise=${activity.exercise.id}&strLevel=${38}`)
		.then((response) => response.json())
		.then((data) => {
			suggestionArray = data;
		})
		// eslint-disable-next-line unicorn/prefer-top-level-await
		.catch((error) => console.error(error));

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
		@apply border bg-surface border-border rounded-md h-9 px-3 w-24 text-right;
	}
</style>
