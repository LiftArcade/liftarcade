<script lang="ts">
	import { page } from '$app/stores';
	import Workouts from '$lib/pages/workouts.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let currentWorkoutPage = Number($page.url.searchParams.get('page')) || 1;
	let currentPath = $page.url.pathname;
</script>

<Workouts workouts={data.workouts} {currentWorkoutPage} {currentPath} />
