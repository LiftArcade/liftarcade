<script>
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
	import { Trash } from 'svelte-heros-v2';
	import { enhance } from '$app/forms';
	import { parseDate } from '@internationalized/date';

	export let data;

	console.log(data.workout);

	let formattedDate = parseDate(data.workout.performed_at).toString();
</script>

<div class={cn(containerVariants({ variant: 'full-padded' }), 'mt-12')}>
	<h1 class={typographyVariants({ variant: 'h2', color: 'default' })}>
		{formattedDate.toString()}
	</h1>

	<div class="my-12">
		{#if !data.workout.activitiesJSON}
			<div class="text-text-muted">No activities</div>
		{:else}
			{#each data.workout.activitiesJSON as activity}
				<div class="flex items-center space-x-3">
					<div class="flex-grow">
						<div class="text-text-muted">
							{activity.exercise.name}
						</div>
						<div class="text-text-muted">
							{activity.sets} x {activity.reps} @ {activity.weight.value}
							{activity.weightUnit}
						</div>
					</div>
					<div class="text-text-muted">
						{activity.intensity}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<form method="POST" action="?/delete" use:enhance>
		<input type="hidden" name="workoutID" value={data.workout.id} />
		<button
			class="ml-auto transition-colors rounded-md bg-destructive hover:bg-destructive/80 text-destructive-foreground p-2"
		>
			<span class="sr-only">Delete workout</span>
			<Trash class="h-5 w-5" /></button
		>
	</form>
</div>
