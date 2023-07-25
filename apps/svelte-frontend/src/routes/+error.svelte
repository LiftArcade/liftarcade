<script>
	// Error page should be a static page, so we don't need to import any data.
	export const prerender = true;

	import MarketingNavigation from '$lib/components/navigation/MarketingNavigation.svelte';
	import { buttonVariants } from '$lib/components/ui/Button.svelte';
	import { containerVariants } from '$lib/components/ui/Container.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->

<MarketingNavigation />

<main
	class={cn(
		containerVariants({ variant: 'full-padded' }),
		'flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8'
	)}
>
	<p class="text-base font-semibold leading-8 text-charge">404</p>
	<h1 class={typographyVariants({ variant: 'h1' })}>Page not found</h1>
	<p class="mt-6 text-base leading-7 text-text-muted">
		Sorry, we couldn’t find the page you’re looking for.
	</p>
	<div class="mt-10">
		<a href="/" class={cn(buttonVariants({ variant: 'ghost' }), '-ml-4')}
			><span class="mr-2" aria-hidden="true">&larr;</span>Back to home</a
		>
	</div>
</main>
