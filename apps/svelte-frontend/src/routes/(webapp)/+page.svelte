<script lang="ts">
	import Logo from '$lib/assets/logo.svg';
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<div class="flex flex-col grow max-w-2xl justify-start space-y-10">
	<div class="tracking-widest uppercase text-sm font-bold text-text-muted">LIFTARCADE</div>
	<img src={Logo} class="dark:hidden h-16 w-16" alt="LiftArcade check logo" />
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
		class={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-72 ')}>Get early access</a
	>
</div>
<div class="text-xs text-muted-foreground mb-12">Copyright 2023 - LiftArcade, Inc.</div>
