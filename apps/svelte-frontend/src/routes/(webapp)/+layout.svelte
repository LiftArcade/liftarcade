<script lang="ts">
	import Shell from '$lib/components/navigation/shell.svelte';
	export let data;

	let { id, name, email, image } = data.user;

	const user = {
		id,
		name,
		email,
		image
	};
</script>

<Shell {user}>
	<slot />
</Shell>
