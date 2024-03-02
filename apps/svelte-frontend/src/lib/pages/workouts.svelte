<script lang="ts">
	import Workout from '$lib/components/workout.svelte';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';

	import type { workout } from '@liftarcade/services-database';

	let {
		promisedWorkouts,
		currentPath,
		currentWorkoutPage = 0
	} = $props<{
		promisedWorkouts: Promise<(typeof workout.$inferSelect)[]>;
		currentWorkoutPage: number;
		currentPath: string;
	}>();
</script>

<div>
	<!-- list of workouts -->
	<div class="mt-14">
		<div class={cn(containerVariants({ variant: 'full-padded' }), 'md:grid md:grid-cols-10')}>
			<div class="flex flex-col space-y-6 flex-1 col-span-7">
				{#await promisedWorkouts then workouts}
					{#each workouts as workout}
						<Workout {workout} />
					{/each}
					<!-- Pagination -->
					<div class="flex justify-between">
						{#if currentWorkoutPage > 1}
							<a
								href={`/dashboard/workouts?page=${currentWorkoutPage - 1}`}
								class={cn(buttonVariants({ variant: 'default' }))}>Previous Page</a
							>
						{:else}
							<button
								class={cn(buttonVariants({ variant: 'ghost' }))}
								disabled={currentWorkoutPage === 1}>Previous Page</button
							>
						{/if}
						<button class={cn(buttonVariants({ variant: 'ghost' }))} disabled={workouts.length <= 3}
							>Next Page</button
						>
					</div>
				{/await}
			</div>
		</div>
		<!-- Pages -->
		<div />
	</div>
</div>
