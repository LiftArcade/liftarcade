<script lang="ts">
	import { page } from '$app/stores';
	import Workouts from '$lib/pages/workouts.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let { recentWorkouts } = data;

	let currentWorkoutPage = 1;
	// eslint-disable-next-line svelte/valid-compile
	let currentPath = $page.url.toString();
</script>

<Workouts promisedWorkouts={recentWorkouts} {currentWorkoutPage} {currentPath} />
