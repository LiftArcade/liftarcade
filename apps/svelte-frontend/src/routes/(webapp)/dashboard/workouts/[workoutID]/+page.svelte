<script>
	import { containerVariants } from '$lib/components/ui/Container.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import { cn } from '$lib/utils/cn';
	import { Trash } from 'svelte-heros';

	export let data;

	const deleteWorkout = async () => {
		const response = await fetch(`/api/v1/workout`, {
			method: 'DELETE',
			body: JSON.stringify({ id: data.workout.id })
		});
		if (response.ok) {
			window.location.href = '/workouts';
		}
	};

	$: formatedDate = new Date(data.workout.performed_at).toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class={cn(containerVariants({ variant: 'full-padded' }), 'mt-12')}>
	<h1 class={typographyVariants({ variant: 'h2', color: 'default' })}>
		{formatedDate}
	</h1>

	<div class="my-12">
		{#each data.workout.activitiesJSON as activity}
			<div class="flex items-center space-x-3">
				<div class="flex-grow">
					<div class="text-text-muted">
						{activity.exercise.name}
					</div>
					<div class="text-text-muted">
						{activity.sets} x {activity.reps} @ {activity.weight}
						{activity.weightUnit}
					</div>
				</div>
				<div class="text-text-muted">
					{activity.intensity}
				</div>
			</div>
		{/each}
	</div>

	<button
		class="ml-auto transition-colors rounded-md bg-destructive hover:bg-destructive/80 text-destructive-foreground p-2"
		on:click={deleteWorkout}
	>
		<span class="sr-only">Delete workout</span>
		<Trash class="h-5 w-5" /></button
	>
</div>
