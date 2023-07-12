<script>
	import { Trash } from 'svelte-heros';

	export let data;

	const deleteWorkout = async () => {
		const response = await fetch(`/api/v1/workout`, {
			method: 'DELETE',
			body: JSON.stringify({ id: data.workout.public_id })
		});
		if (response.ok) {
			window.location.href = '/workouts';
		}
	};
</script>

<div>
	Showing workout: {data.workout.id}
	<button
		class="ml-auto transition-colors rounded-md bg-destructive hover:bg-destructive/80 text-destructive-foreground p-2"
		on:click={deleteWorkout}
	>
		<span class="sr-only">Delete workout</span>
		<Trash class="h-5 w-5" /></button
	>
</div>
