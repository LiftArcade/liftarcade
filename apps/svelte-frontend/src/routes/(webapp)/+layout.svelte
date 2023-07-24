<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from '$lib/components/navigation/Navigation.svelte';

	$: {
		if (!$page.data.session) {
			$page.error(401, 'Unauthorized');
		}
	}
</script>

<Navigation
	userImageUrl={$page.data.session?.user.image}
	userName={$page.data.session?.user.name}
/>
<main>
	<slot />
</main>
