<script>
	import Container from '$lib/components/ui/Container.svelte';
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

<div class="space-y-12">
	<h1 class="text-3xl">Explore</h1>
	<hr />
	{#each workouts as workout}
		<div>
			<h2>{workout.name}</h2>
			<p>{workout.description}</p>
		</div>
	{/each}
</div>
