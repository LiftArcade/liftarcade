<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>This is where all of my workouts are at:</div>

<div class="space-y-2">
	{#if !data.workouts || data.workouts.length === 0}
		<div class="p-4 bg-secondary text-secondary-foreground rounded-lg shadow-lg">
			<div class="text-center">No workouts yet</div>
		</div>
	{:else}
		{#each data.workouts as workout}
			<a
				href={`/dashboard/workouts/${workout.public_id}`}
				class="flex p-4 bg-secondary text-secondary-foreground rounded-lg shadow-lg"
			>
				<div>{workout.public_id}</div>
				<div>{workout.performed_at}</div>
				<div class="ml-auto">{workout.activitiesJSON}</div>
			</a>
		{/each}
	{/if}
</div>
