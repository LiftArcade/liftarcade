<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<div class="flex flex-col grow max-w-2xl items-center space-y-10 mx-auto">
	<h1 class={cn(typographyVariants({ variant: 'h1' }), 'mt-40 text-center')}>
		Building a better workout experience
	</h1>
	<p class="text-base leading-relaxed text-muted-foreground mt-4 text-center">
		Designed for athletes looking to get the most out of their fitness. Provides in-depth analysis
		of your workouts so you can maximize your gains and eliminate overtraining.
	</p>
	<a
		id="test"
		href="/earlyaccess"
		class={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-72 ')}>Get early access</a
	>
</div>
