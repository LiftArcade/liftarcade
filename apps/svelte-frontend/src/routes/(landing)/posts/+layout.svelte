<script>
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<header class="py-3 border-b border-zinc-700 w-full sticky top-0 bg-zinc-900/80 backdrop-blur-lg">
	<div
		class={cn(
			containerVariants({ variant: 'centered-padded' }),
			'flex items-center gap-3 max-w-4xl'
		)}
	>
		<a
			href="/landing"
			class="flex items-center gap-x-3 -m-1.5 p-1.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
		>
			<img src={LogoDark} alt="LiftArcade Check Logo" class="w-10 h-10 relative" />
			<div class="text-zinc-400 text-sm font-semibold leading-none tracking-[0.2em]">
				LIFTARCADE
			</div>
		</a>
		<div class="justify-start items-start gap-6 flex ml-auto">
			<div class="text-white text-base font-semibold leading-tight">Coming soon</div>
		</div>
	</div>
</header>

<slot />
