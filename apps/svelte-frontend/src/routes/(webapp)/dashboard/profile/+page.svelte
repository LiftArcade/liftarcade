<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<!-- TODO: Coming soon profile look-up -->

<div
	class={cn(
		containerVariants({ variant: 'full-padded' }),
		'flex flex-col justify-center items-center py-12 lg:py-24'
	)}
>
	<h1 class={cn(typographyVariants({ variant: 'h2' }))}>Coming Soon</h1>
	<p class={cn(typographyVariants({ variant: 'p', color: 'muted' }))}>
		We're working hard to get this to you asap.
	</p>
	<a href="/dashboard" class={cn(buttonVariants({ variant: 'default' }), 'mt-3')}
		>Back to dashboard</a
	>
</div>
