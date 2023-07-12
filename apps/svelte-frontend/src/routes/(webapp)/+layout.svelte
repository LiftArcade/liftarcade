<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from '$lib/components/navigation/Navigation.svelte';

	let userImageUrl = $page.data.session?.user.image || '';
	let userName = $page.data.session?.user.name || '';
</script>

<Navigation {userImageUrl} {userName} />
<main class="px-4 sm:px-6 lg:px-8 mt-6">
	<slot />
</main>
