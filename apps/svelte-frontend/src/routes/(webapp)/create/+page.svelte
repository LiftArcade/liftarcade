<script lang="ts">
	import ActivityBar from '$lib/components/activity-bar.svelte';
	import Combobox from '$lib/components/ui/combobox.svelte';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { workout } from '$lib/stores/workout.store';
	import { cn } from '$lib/utils/cn';
	import { exercises } from '@liftarcade/exercises-lib';
	import { PlusSmall, Trash } from 'svelte-heros';
	import { typeid } from 'typeid-js';

	let query = '';

	const handleSelected = (selected: any) => {
		workout.addActivity({
			id: typeid('activity').toString(),
			type: 'sri',
			position: $workout.activities.length + 1,
			exercise: selected,
			sets: 1,
			reps: 1,
			weight: 100,
			weightUnit: 'lb',
			intensity: 7
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
			.then((response) => response.json())
			.then((data) => {
				workout.reset();
			})
			.catch((error) => console.error(error));
	}

	const handleSuggestions = async (exerciseId: string) => {
		fetch(`/api/suggest?exercise=${exerciseId}&strLevel=${38}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.then((response) => response);
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
					class={buttonVariants({ variant: 'default', size: 'sm' })}
					on:click={handleCreateWorkout}
				>
					<span><PlusSmall class="h-5 w-5" /></span>
					<span> Save workout </span></button
				>
				<button
					class={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'group')}
					on:click={() => workout.reset()}
				>
					<Trash class="h-5 w-5 text-gray-500 group-hover:text-destructive transition-colors" />
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
			{#if activity}
				<ActivityBar {activity} />
			{/if}
		{/each}
	</div>
</div>

<style lang="postcss">
	input {
		@apply border bg-gray-50 dark:bg-gray-900 dark:border-gray-800 rounded-md h-9 px-3;
	}
</style>
