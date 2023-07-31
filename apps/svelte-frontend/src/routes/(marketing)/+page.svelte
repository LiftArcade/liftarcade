<script lang="ts">
	import Logo from '$lib/assets/logo.svg';
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<main class="flex flex-col h-full">
	<div class="flex flex-col text-center grow max-w-2xl mx-auto justify-center">
		<img src={Logo} class="dark:hidden h-16 w-16 mx-auto" alt="LiftArcade check logo" />
		<img src={LogoDark} class="dark:block hidden h-16 w-16 mx-auto" alt="LiftArcade check logo" />
		<h1 class={cn(typographyVariants({ variant: 'h1' }), 'mt-12')}>
			Building a better workout experience
		</h1>
		<p class="text-base leading-relaxed text-muted-foreground mt-4">
			Designed for athletes looking to get the most out of their fitness. Provides in-depth analysis
			of your workouts so you can maximize your gains and eliminate overtraining.
		</p>
		<a
			id="test"
			href="/earlyaccess"
			class={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-72 mx-auto mt-12')}
			>Get early access</a
		>
	</div>
	<div class="col-span-3 text-center text-xs text-muted-foreground mb-12">
		Copyright 2023 - LiftArcade, Inc.
	</div>
</main>
