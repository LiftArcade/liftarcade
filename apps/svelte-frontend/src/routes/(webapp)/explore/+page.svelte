<script>
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';

	const workouts = [
		{
			name: 'PHUL: Hypertrophy',
			description: 'Power Hypertrophy Upper Lower'
		},
		{
			name: 'StrongLifts 5x5',
			description: '5 sets of 5 reps for strength'
		},
		{
			name: 'Starting Strength',
			description: 'Basic barbell training for strength'
		},
		{
			name: 'PHUL: Hypertrophy',
			description: 'Power Hypertrophy Upper Lower'
		},
		{
			name: 'StrongLifts 5x5',
			description: '5 sets of 5 reps for strength'
		},
		{
			name: 'Starting Strength',
			description: 'Basic barbell training for strength'
		},
		{
			name: 'PHUL: Hypertrophy',
			description: 'Power Hypertrophy Upper Lower'
		},
		{
			name: 'StrongLifts 5x5',
			description: '5 sets of 5 reps for strength'
		},
		{
			name: 'Starting Strength',
			description: 'Basic barbell training for strength'
		},
		{
			name: 'PHUL: Hypertrophy',
			description: 'Power Hypertrophy Upper Lower'
		},
		{
			name: 'StrongLifts 5x5',
			description: '5 sets of 5 reps for strength'
		},
		{
			name: 'Starting Strength',
			description: 'Basic barbell training for strength'
		}
	];
</script>

<div class={cn(containerVariants({ variant: 'full-padded' }), 'space-y-12 mt-12')}>
	<h1 class="text-3xl">Explore</h1>
	<hr />
	{#each workouts as workout}
		<div>
			<h2>{workout.name}</h2>
			<p>{workout.description}</p>
		</div>
	{/each}
</div>
