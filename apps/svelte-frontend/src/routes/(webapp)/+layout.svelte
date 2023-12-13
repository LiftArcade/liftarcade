<script lang="ts">
	import Shell from '$lib/components/navigation/shell.svelte';
	import { page } from '$app/stores';

	let { data } = $props();
</script>

<Shell currentPath={$page.url.pathname} currentUser={data.promised.user}>
	<slot />
</Shell>
