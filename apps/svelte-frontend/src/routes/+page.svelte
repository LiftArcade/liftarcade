<script lang="ts">
	import LandingLogoIcon from '$lib/assets/landing-logo-icon.svg';
	import LandingLogo from '$lib/assets/landing-logo.svg';
	import { buttonVariants } from '$lib/components/ui/Button.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import ArrowRight from 'svelte-heros-v2/ArrowRight.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<svelte:head>
	<title>LiftArcade - Human Performance</title>
</svelte:head>

<main class="flex flex-col h-full">
	<div class="flex justify-between px-4 mt-6 md:px-6">
		<div>Logo</div>
		<a href="/earlyaccess" class={cn('ml-auto', buttonVariants({ variant: 'link' }))}
			>Early Access <ArrowRight class="ml-3 no" variation="solid" size="18" tabindex="-1" /></a
		>
	</div>
	<div class="flex flex-col text-center grow max-w-2xl mx-auto justify-center">
		<img src={LandingLogoIcon} class="mx-auto dark:invert" alt="check logo" />
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
	<div class="col-span-3 text-center">Footer tabs</div>
</main>
