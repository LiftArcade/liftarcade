<script>
	// Error page should be a static page, so we don't need to import any data.
	export const prerender = true;

	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->

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
