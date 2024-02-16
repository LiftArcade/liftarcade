<script lang="ts">
	import { page } from '$app/stores';
	import Workouts from '$lib/pages/workouts.svelte';

	let currentWorkoutPage = Number($page.url.searchParams.get('page')) || 1;
	let currentPath = $page.url.pathname;
</script>

<Workouts workouts={[]} {currentWorkoutPage} {currentPath} />
