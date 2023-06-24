<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>This is where all of my workouts are at:</div>

{#each $page.data.workouts as workout}
	<div>{workout.public_id}</div>
{/each}
