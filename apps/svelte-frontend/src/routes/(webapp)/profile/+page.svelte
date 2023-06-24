<script lang="ts">
	import { page } from '$app/stores';
</script>

This is a profile section Here are the workouts?!

{#await $page.data.workouts}
	<p>loading...</p>
{:then workouts}
	{#each workouts as workout}
		{workout.public_id}
	{/each}
{:catch error}
	<p>error: {error.message}</p>
{/await}
