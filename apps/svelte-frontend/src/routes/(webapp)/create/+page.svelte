<script lang="ts">
	import ActivityBar from '$lib/components/activity-bar.svelte';
	import Combobox from '$lib/components/ui/combobox.svelte';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { workout } from '$lib/stores/workout.store.svelte';
	import { cn } from '$lib/utils/cn';
	import { Plus, Trash } from 'svelte-heros-v2';
	import type { Exercise } from '@liftarcade/exercises-lib';

	const handleSelected = (selected: Exercise) => {
		workout.addActivity({
			type: 'sri',
			position: workout.activities.length + 1,
			exercise: selected,
			sets: 1,
			reps: 1,
			weight: {
				value: 100,
				unit: 'lb'
			},
			intensity: 7
		});
	};

	function handleCreateWorkout() {
		console.log('Workout', workout);
		fetch('/api/v1/workout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: workout.toJSON()
		})
			.then((response) => response.json())
			.then(() => {
				workout.reset();
			})
			.catch((error) => console.error(error));
	}
</script>

<div class={cn(containerVariants({ variant: 'full-padded' }), '')}>
	<div class="steel-container">
		<div class="space-y-10">
			<div class="flex items-center space-x-3">
				<div class="flex-grow">
					<div class={typographyVariants({ variant: 'h2' })}>Add workout</div>
				</div>

				<input
					class="border border-gray-200 rounded-md h-9 ml-auto px-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors dark:bg-gray-900 dark:border-gray-800"
					type="date"
					name="performedAt"
					bind:value={workout.performed_at}
				/>

				<button
					class={buttonVariants({ variant: 'default', size: 'sm' })}
					onclick={handleCreateWorkout}
				>
					<span><Plus class="h-5 w-5" /></span>
					<span> Save workout </span></button
				>
				<button
					class={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'group')}
					onclick={() => workout.reset()}
				>
					<Trash class="h-5 w-5 text-gray-500 group-hover:text-destructive transition-colors" />
				</button>
			</div>

			<Combobox {handleSelected} />

			<hr class="dark:border-gray-800" />
		</div>

		{#if workout.activities.length === 0}
			<div class="flex items-center justify-center h-96">
				<div class="text-gray-400">No activities added.</div>
			</div>
		{/if}

		{#each workout.activities as activity, index}
			{#if activity}
				<ActivityBar bind:activity={workout.activities[index]} />
			{/if}
		{/each}
	</div>
</div>
