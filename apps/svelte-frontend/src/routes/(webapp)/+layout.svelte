<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import { error } from '@sveltejs/kit';
</script>

<Navigation
	userImageUrl={$page.data.session?.user.image}
	userName={$page.data.session?.user.name}
/>
<main>
	<slot />
</main>
