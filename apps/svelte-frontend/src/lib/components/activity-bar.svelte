<script lang="ts">
	import { workout } from '$lib/stores/workout.store.svelte';
	import { Icon, ChevronDown, ChevronUp, Trash } from 'svelte-heros-v2';
	import type { Activity } from '@liftarcade/exercises-lib';

	let { activity } = $props<{ activity: Partial<Activity> }>();

	type SuggestionData = Array<{
		s: number;
		r: number;
		suggestion: number;
	}>;

	let suggestionArray = [] as SuggestionData;

	if (!activity.exercise) {
		throw new Error('Activity must have an exercise');
	}
	fetch(`/api/v1/suggest?exercise=${activity.exercise.id}&strLevel=${35}`)
		.then((response) => response.json())
		.then((data) => {
			suggestionArray = data;
		})
		// eslint-disable-next-line unicorn/prefer-top-level-await
		.catch((error) => console.error(error));

	let suggestion = $derived.by(() => {
		activity.sets = activity.sets;
		activity.reps = activity.reps;

		return Math.round(
			suggestionArray.find((s) => s.s === activity.sets && s.r === activity.reps)?.suggestion ?? 0
		).toString();
	});

	function handleSetWeight(event: Event) {
		const target = event.target as HTMLInputElement;
		activity.weight = {
			value: Number.parseFloat(target.value),
			unit: 'lb'
		};
	}
</script>

<fieldset class="p-4 flex space-x-2 items-center">
	<div class="flex flex-col space-y-0.5 text-gray-700">
		<button
			onclick={() => workout.moveActivityOneUp(activity)}
			class="hover:bg-gray-100 p-1 rounded-md"
			><Icon
				icon={ChevronUp}
				class="h-4 w-4 text-text group-hover:text-text fill-current"
			/></button
		>
		<button
			onclick={() => workout.moveActivityOneDown(activity)}
			class="hover:bg-gray-100 p-1 rounded-md group"
			><Icon
				icon={ChevronDown}
				class="h-4 w-4 text-text group-hover:text-text fill-current"
			/></button
		>
	</div>
	<div class="flex grow font-bold text-2xl">{activity.exercise?.name}</div>
	<input type="number" bind:value={activity.sets} />
	<input type="number" bind:value={activity.reps} />
	<input type="number" value={activity.weight?.value} on:change={handleSetWeight} />
	<input type="number" bind:value={activity.intensity} />
	<div class="w-24 tabular-nums text-right">{suggestion}</div>
	<button onclick={() => workout.removeActivity(activity)}>
		<Icon icon={Trash} class="text-gray-500 hover:text-rose-600" />
	</button>
</fieldset>

<style lang="postcss">
	input {
		@apply border bg-surface border-border rounded-md h-9 px-3 w-24 text-right;
	}
</style>
