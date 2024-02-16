<script>
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';
	import BackgroundImage from '$lib/assets/landing/bg.webp?enhanced';
	import { createDialog } from '@melt-ui/svelte';

	import { Icon, ChartBar, LockClosed, ArrowPath } from 'svelte-heros-v2';
	import { buttonVariants } from '$lib/components/ui/button.svelte';

	const {
		elements: { trigger, close },
		states: { open }
	} = createDialog();

	// const navigation = [
	// 	{ name: 'Product', href: '#' },
	// 	{ name: 'Features', href: '#' },
	// 	{ name: 'Marketplace', href: '#' },
	// 	{ name: 'Company', href: '#' }
	// ];

	const tagLines = [
		'Yet another fitness app... because the world needs more of those',
		'Oh please, not another fitness app... but here we are',
		'Just what you needed: another fitness app',
		'Yet another fitness app... because why not?',
		'Oh great, another fitness app to ignore',
		'Not just another fitness app... but probably close',
		"Yet another fitness app... because we couldn't resist",
		'Oh please, not another fitness app... but we made one anyway',
		'Just another fitness app... but with a twist of disappointment',
		"Yet another fitness app... because we're not very original"
	];

	const features = [
		{
			name: 'Monitor Workouts',
			description:
				'Capture detailed metrics about your workouts. Track your progress over time and improve your performance.',
			href: '#',
			icon: ChartBar
		},
		{
			name: 'SSL certificates',
			description:
				'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
			href: '#',
			icon: LockClosed
		},
		{
			name: 'Simple queues',
			description:
				'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
			href: '#',
			icon: ArrowPath
		}
	];

	// Old stuff

	// <div id="bg-image" class="h-[95vh]">
	// 	<header class="w-full z-40">
	// 		<nav
	// 			class={cn(
	// 				containerVariants({ variant: 'centered-padded' }),
	// 				'flex w-full items-center justify-between py-6 gap-3'
	// 			)}
	// 		>
	// 			<a
	// 				href="/"
	// 				class="p-1.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
	// 			>
	// 				<span class="sr-only">LiftArcade</span>
	// 				<img class="size-10" src={LogoDark} alt="" />
	// 			</a>
	// 		</nav>
	// 	</header>

	// 	<div class="flex flex-col grow relative isolate px-6 lg:px-8 mt-12">
	// 		<div class="mx-auto max-w-3xl flex flex-col items-center justify-center flex-grow">
	// 			<div class="mb-8 flex justify-center">
	// 				<div
	// 					class="relative text-center rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 backdrop-blur-sm border-zinc-600 border ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-600"
	// 				>
	// 					Read about what we’re building this and what to expect
	// 					<a href="/posts/intro" class="font-semibold text-orange-600 focus:outline-none"
	// 						><span class="absolute inset-0 ml-2" aria-hidden="true"></span>Read more
	// 						<span aria-hidden="true">&rarr;</span>
	// 					</a>
	// 				</div>
	// 			</div>
	// 			<div class="text-center">
	// 				<h1 id="header" class="text-4xl text-white font-bold tracking-tight text-text sm:text-6xl">
	// 					Introducing a better workout experience
	// 				</h1>
	// 				<p class="mt-6 text-lg leading-8 text-zinc-400">
	// 					Designed for athletes looking to get the most out of their fitness. Detailed analysis of
	// 					your workouts so you can maximize your gains.
	// 				</p>
	// 				<div class="mt-10 flex items-center justify-center gap-x-6">
	// 					<a
	// 						href="/posts/intro"
	// 						class="rounded-lg backdrop-blur-sm border-2 border-zinc-700 bg-zinc-900/40 px-3.5 py-2.5 text-sm font-semibold text-orange-100 hover:text-orange-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-150 active:text-orange-400"
	// 						>Sign up for early access &rightarrow;</a
	// 					>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>

	// <div class={cn(containerVariants({ variant: 'centered-padded' }))}>
	// 	<div class="rounded-lg bg-zinc-900">
	// 		Aliquip laborum officia nulla dolor nostrud mollit. Officia consequat ex culpa Lorem ipsum
	// 		incididunt. Nulla aliqua excepteur ex ipsum voluptate. Est magna dolore et quis quis et commodo.
	// 		Fugiat mollit id eu labore proident est commodo laborum irure ullamco occaecat sit proident
	// 		tempor aute. Tempor elit eu incididunt culpa eiusmod tempor dolor ut elit esse laboris fugiat ad
	// 		ea officia. Ad incididunt in laborum exercitation dolor minim esse nisi incididunt. Officia elit
	// 		cupidatat cupidatat sint consectetur veniam reprehenderit velit.
	// 	</div>
	// </div>

	// <div class={cn(containerVariants({ variant: 'centered-padded' }))}>
	// 	<hr class="my-4 border-zinc-800" />
	// </div>

	// <!-- The footer is done. Don't touch. -->
	// <footer
	// 	class={cn(
	// 		containerVariants({ variant: 'centered-padded' }),
	// 		'flex flex-col md:flex-row items-center gap-y-6 md:gap-x-4 text-zinc-500 pt-8 pb-12 text-xs font-medium'
	// 	)}
	// >
	// 	<!-- logo -->
	// 	<img src={LogoDark} alt="LiftArcade" class="size-8" />

	// 	<!-- Copy -->
	// 	<div>&copy; LiftArcade 2024. All rights reserved.</div>

	// 	<!-- Links -->
	// 	<div class="flex justify-center md:justify-end md:ml-auto gap-x-5 text-zinc-50">
	// 		<a href="/terms">Terms of Service</a>
	// 		<a href="/cookies">Cookies</a>
	// 		<a href="/privacy">Privacy Policy</a>
	// 	</div>
	// </footer>
</script>

<div class="bg-zinc-900">
	<header class="absolute inset-x-0 top-0 z-50">
		<nav
			class={cn(
				containerVariants({ variant: 'centered-padded' }),
				'flex items-center justify-between pt-6'
			)}
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5 flex items-center gap-x-4 sm:gap-x-6 text-white">
					<span class="sr-only">LiftArcade</span>
					<img class="h-8 w-auto" src={LogoDark} alt="" />
					<div class="text-zinc-400 text-sm font-semibold leading-none tracking-widest">
						LIFTARCADE
					</div>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
					use:melt={$trigger}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="#" class="text-sm font-semibold leading-6 text-white">Product</a>
				<a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>
				<a href="#" class="text-sm font-semibold leading-6 text-white">Marketplace</a>
				<a href="#" class="text-sm font-semibold leading-6 text-white">Company</a>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="#" class="text-sm font-semibold leading-6 text-white"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		{#if $open}
			<div class="lg:hidden" role="dialog" aria-modal="true">
				<!-- Background backdrop, show/hide based on slide-over state. -->
				<div class="fixed inset-0 z-50"></div>
				<div
					class={cn(
						containerVariants({ variant: 'centered-padded' }),
						'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-900 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'
					)}
				>
					<div class="flex items-center justify-between">
						<a href="#" class="-m-1.5 p-1.5">
							<span class="sr-only">LiftArcade</span>
							<img class="h-8 w-auto" src={LogoDark} alt="" />
						</a>
						<button type="button" class="-m-2.5 rounded-md p-2.5 text-zinc-400" use:melt={$close}>
							<span class="sr-only">Close menu</span>
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-zinc-500/25">
							<div class="space-y-2 py-6">
								<a
									href="#"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
									>Product</a
								>
								<a
									href="#"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
									>Features</a
								>
								<a
									href="#"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
									>Marketplace</a
								>
								<a
									href="#"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
									>Company</a
								>
							</div>
							<div class="py-6">
								<a
									href="#"
									class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
									>Log in</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</header>

	<div class="relative isolate overflow-hidden pt-14">
		<enhanced:img
			src={BackgroundImage}
			alt=""
			class="absolute inset-0 -z-10 h-full w-full object-cover"
		/>

		<div
			class={cn(
				containerVariants({ variant: 'centered-padded' }),
				'mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'
			)}
		>
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 ring-1 ring-white/10 hover:ring-white/20"
				>
					{tagLines[Math.floor(Math.random() * tagLines.length)]}
					<a href="#" class="font-semibold text-charge"
						><span class="absolute inset-0" aria-hidden="true"></span>Ready why
						<span aria-hidden="true">&rarr;</span></a
					>
				</div>
			</div>
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Introducing a better workout experience
				</h1>
				<p class="mt-6 text-lg leading-8 text-zinc-300">
					Detailed analysis of your workouts so you can feel confident you're getting the most out
					of your training.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
						>Get early access</a
					>
					<a href="#" class="text-sm font-semibold leading-6 text-white"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="bg-zinc-900 py-24 sm:py-32">
	<div
		class={cn(containerVariants({ variant: 'centered-padded' }), 'mx-auto max-w-7xl px-6 lg:px-8')}
	>
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-orange-400">Deploy faster</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Everything you need to deploy your app
			</p>
			<p class="mt-6 text-lg leading-8 text-zinc-300">
				Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
				elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				{#each features as feature}
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
							<Icon
								icon={feature.icon}
								class="h-5 w-5 flex-none text-orange-400"
								aria-hidden="true"
								color="currentColor"
							/>
							{feature.name}
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-300">
							<p class="flex-auto">{feature.description}</p>
							<p class="mt-6">
								<a href={feature.href} class="text-sm font-semibold leading-6 text-orange-400">
									Learn more <span aria-hidden="true">→</span>
								</a>
							</p>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
<div class={cn(containerVariants({ variant: 'centered-padded' }))}>
	<hr class="my-4 border-zinc-800" />
</div>
<!-- The footer is done. Don't touch. -->
<footer
	class={cn(
		containerVariants({ variant: 'centered-padded' }),
		'flex flex-col md:flex-row items-center gap-y-6 md:gap-x-4 text-zinc-500 pt-8 pb-12 text-xs font-medium'
	)}
>
	<!-- logo -->
	<img src={LogoDark} alt="LiftArcade" class="size-8" />
	<!-- Copy -->
	<div>&copy; LiftArcade 2024. All rights reserved.</div>
	<!-- Links -->
	<div class="flex justify-center md:justify-end md:ml-auto gap-x-5 text-zinc-50">
		<a href="/terms">Terms of Service</a>
		<a href="/cookies">Cookies</a>
		<a href="/privacy">Privacy Policy</a>
	</div>
</footer>

<style>
	:global(body) {
		@apply bg-zinc-900;
	}

	#bg-image {
		background-image: url($lib/assets/landing/bg.webp?enhanced);
		background-size: cover;
		background-position: center;

		@apply border-b-8 border-zinc-700;
	}
</style>
