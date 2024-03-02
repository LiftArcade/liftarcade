<script>
	import Logo from '$lib/assets/logo.svg';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<div class="w-full h-12 bg-surface-muted flex items-center border-b border-border">
	<div class={cn(containerVariants({ variant: 'centered-padded' }), 'flex grow')}>
		<div id="leftHeader" class="flex items-center justify-start gap-3">
			<div class="w-7 h-7 relative">
				<img src={Logo} alt="logo" />
			</div>
			<div class="text-center text-border text-base font-medium">/</div>
			<div class="justify-start items-center gap-1 flex">
				<div class="px-3 py-2 justify-center items-center gap-2 flex">
					<div class="text-center text-text text-sm font-medium">Home</div>
				</div>
				<div class="px-3 py-2 justify-center items-center gap-2 flex">
					<div class="text-center text-text text-sm font-medium">Guide</div>
				</div>
				<div class="px-3 py-1.5 rounded-md justify-center items-center gap-2 flex">
					<div class="text-center text-text text-sm font-medium">Blog</div>
				</div>
				<div class="px-3 py-2 justify-center items-center gap-2 flex">
					<div class="text-center text-text text-sm font-medium">Pricing</div>
				</div>
				<div class="px-3 py-2 justify-center items-center gap-2 flex">
					<div class="text-center text-text text-sm font-medium">Help</div>
				</div>
			</div>
		</div>
		<div id="rightHeader" class="ml-auto">
			<a
				href="/"
				class="h-9 px-7 py-3.5 bg-orange-950 rounded-full shadow border border-orange-500 justify-center items-center inline-flex ml-auto"
			>
				<div class="text-orange-50 text-sm font-medium leading-none">Go to the app -></div>
			</a>
		</div>
	</div>
</div>

<div
	class={cn(
		containerVariants({ variant: 'centered-padded' }),
		'flex grow sticky top-0 w-full bg-surface/90 backdrop-blur h-12 items-center'
	)}
>
	<div class="w-72 h-7 justify-start items-baseline gap-5 inline-flex">
		<div class="text-text text-2xl font-semibold">Blog</div>
		<div class="text-center text-border text-base font-medium">/</div>
		<div class="text-text text-sm font-semibold">Finding Performance: A Br...</div>
	</div>
	<div class="w-32 h-9 left-[1046px] top-0 absolute justify-start items-start gap-2 inline-flex">
		<div class="p-2 justify-start items-start gap-2 flex">
			<div class="w-5 h-5 relative"></div>
		</div>
		<div class="p-2 justify-start items-start gap-2 flex">
			<div class="w-5 h-5 relative"></div>
		</div>
		<div class="p-2 justify-start items-start gap-2 flex">
			<div class="w-5 h-5 relative"></div>
		</div>
	</div>
</div>

<slot />

<style lang="postcss">
	.topNavigation {
		background-color: #f8f8f8;
		padding: 10px;
	}
</style>
