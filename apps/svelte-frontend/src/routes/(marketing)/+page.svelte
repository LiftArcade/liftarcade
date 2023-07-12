<script lang="ts">
	import Logo from '$lib/assets/logo.svg';
	import { buttonVariants } from '$lib/components/ui/Button.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import { cn } from '$lib/utils/cn';
	import { ArrowRight } from 'svelte-heros';
	import MarketingNavigation from '$lib/components/navigation/MarketingNavigation.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
</script>

<main class="flex flex-col h-full">
	<div class="flex flex-col text-center grow max-w-2xl mx-auto justify-center mx-6">
		<img src={Logo} class="mx-auto dark:invert h-12 w-12" alt="check logo" />
		<h1 class={cn(typographyVariants({ variant: 'h1' }), 'mt-12')}>
			Building a better workout experience
		</h1>
		<p class="text-base leading-relaxed text-muted-foreground mt-2">
			Designed for athletes looking to get the most out of their fitness. Provides in-depth analysis
			of your workouts so you can maximize your gains and eliminate overtraining.
		</p>
		<a
			id="test"
			href="/earlyaccess"
			class={cn(
				'mt-12',
				buttonVariants({ variant: 'default', size: 'lg' }),
				'bg-gray-950 text-white dark:bg-charge w-72 mx-auto'
			)}>Get early access</a
		>
	</div>
	<div class="col-span-3 text-center text-xs text-muted-foreground mb-12">
		Copyright 2023 - LiftArcade, Inc.
	</div>
</main>
