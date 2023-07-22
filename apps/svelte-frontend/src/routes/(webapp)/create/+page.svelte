<script lang="ts">
	import ActivityBar from '$lib/components/ActivityBar.svelte';
	import Combobox from '$lib/components/Combobox.svelte';
	import { containerVariants } from '$lib/components/ui/Container.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import { workout } from '$lib/stores/workout.store';
	import { cn } from '$lib/utils/cn';
	import { exercises } from '@liftarcade/exercises-lib';
	import { PlusSmall, Trash } from 'svelte-heros';

	let query = '';

	const handleSelected = (selected: any) => {
		workout.addActivity({
			id: $workout.activities.length + 1,
			position: $workout.activities.length + 1,
			exercise: selected,
			exerciseID: selected.id,
			sets: 1,
			reps: 1,
			weight: undefined,
			weightUnit: 'lbs',
			intensity: undefined
		});
		query = '';
	};

	function handleCreateWorkout() {
		fetch('/api/v1/workout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($workout)
		})
			.then((res) => res.json())
			.then((data) => {
				workout.reset();
			})
			.catch((err) => console.error(err));
	}

	const handleSuggestions = async (exerciseId: string) => {
		fetch(`/api/suggest?exercise=${exerciseId}&strLevel=${38}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.then((res) => res);
	};
</script>

<div class={cn(containerVariants({ variant: 'full-padded' }), 'mt-12')}>
	<div class="steel-container">
		<div class="space-y-10 mt-10">
			<div class="flex items-center space-x-3">
				<div class="flex-grow">
					<h1 class={typographyVariants({ variant: 'h2' })}>New Workout</h1>
				</div>

				<input
					class="border border-gray-200 rounded-md h-9 ml-auto px-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors dark:bg-gray-900 dark:border-gray-800"
					type="date"
					name="performedAt"
					bind:value={$workout.performed_at}
				/>

				<button
					class="active:transform-none inline-flex items-center justify-center text-sm space-x-0.5 font-medium transition-colors bg-asphalt dark:bg-charge text-snow hover:bg-asphalt/90 h-9 px-3 rounded-md dark:border dark:border-gray-800"
					on:click={handleCreateWorkout}
				>
					<span><PlusSmall class="h-5 w-5" /></span>
					<span> Save workout </span></button
				>
				<button
					class="group h-9 w-9 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 transition-colors dark:border-gray-800 dark:hover:bg-gray-800"
					on:click={() => workout.reset()}
				>
					<Trash class="h-5 w-5 text-gray-500 group-hover:text-rose-500 transition-colors" />
				</button>
			</div>

			<Combobox {handleSelected} data={exercises.exercises || []} bind:query />

			<hr class="dark:border-gray-800" />
		</div>

		{#if $workout.activities.length === 0}
			<div class="flex items-center justify-center h-96">
				<div class="text-gray-400">No activities added.</div>
			</div>
		{/if}

		{#each $workout.activities as activity (activity)}
			<ActivityBar {activity} />
		{/each}
	</div>
</div>

<style lang="postcss">
	input {
		@apply border bg-gray-50 dark:bg-gray-900 dark:border-gray-800 rounded-md h-9 px-3;
	}
</style>
