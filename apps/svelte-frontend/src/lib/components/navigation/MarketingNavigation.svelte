<script lang="ts">
	import { page } from '$app/stores';

	let showSidebar = false;
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import { XMark, Bars3, PlusCircle, Sun } from 'svelte-heros';
	import Logo from '$lib/assets/logo.svg';
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { cn } from '$lib/utils/cn';
	import { containerVariants } from '../ui/Container.svelte';
	import { buttonVariants } from '../ui/Button.svelte';

	function toggleShowSidebar() {
		showSidebar = !showSidebar;
	}

	function slowOut(node: any, { duration = 150, delay = 0 }) {
		return {
			delay,
			duration,
			css: (t: any) => {
				const eased = cubicOut(t);
				return `transform: translate(-${(1 - eased) * 100}%)`;
			}
		};
	}

	let navigation: {
		id: string;
		href: string;
		value: string;
		activeMatch: boolean;
	}[]; //

	$: navigation = [
		{
			id: 'home',
			href: '/',
			value: 'Home',
			activeMatch: /^\/$/.test($page.url.pathname)
		},
		{
			id: 'guide',
			href: '/guide',
			value: 'Guide',
			activeMatch: /^\/guide/.test($page.url.pathname)
		},
		{
			id: 'pricing',
			href: '/pricing',
			value: 'Pricing',
			activeMatch: /^\/pricing/.test($page.url.pathname)
		},
		{
			id: 'help',
			href: '/help',
			value: 'Help',
			activeMatch: /^\/help/.test($page.url.pathname)
		}
	];

	beforeNavigate(() => {
		showSidebar = false;
	});
</script>

{#if showSidebar}
	<div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
		<div
			class="fixed inset-0 bg-gray-950/90"
			transition:fade={{ duration: 150, easing: cubicOut }}
		/>
		<div class="fixed inset-0 flex">
			<div class="relative mr-16 flex w-full max-w-xs flex-1" transition:slowOut={{}}>
				<div
					class="absolute left-full top-0 flex w-16 justify-center pt-5"
					transition:fade={{ duration: 150, easing: cubicOut }}
				>
					<button type="button" class="-m-2.5 p-2.5" on:click={toggleShowSidebar}>
						<span class="sr-only">Close sidebar</span>
						<XMark class="h-6 w-6 text-white" />
					</button>
				</div>

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div
					class="flex grow flex-col gap-y-5 overflow-y-auto bg-surface px-6 py-2 border-r border-border shadow-xl"
				>
					<div class="flex h-12 shrink-0 items-center">
						<div id="left_nav" class="flex items-center space-x-3">
							<!-- Logo Image -->
							<div id="logo" class="h-9 w-9 items-center justify-center flex">
								<img src={Logo} class="dark:hidden h-10 w-10" alt="LiftArcade check logo" />
								<img
									src={LogoDark}
									class="dark:block hidden h-10 w-10"
									alt="LiftArcade check logo"
								/>
							</div>
							<!-- Separator -->
							<div class="text-border">/</div>
						</div>
					</div>

					<hr class="mb-3 border-muted" />
					<nav class="flex flex-1 flex-col">
						<ul class="flex flex-1 flex-col">
							{#each navigation as navItem}
								<li>
									<!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
									<a
										href={navItem.href}
										class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium text-foreground hover:text-primary hover:bg-muted -mx-2 mt-1"
									>
										{navItem.value}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Static sidebar for desktop -->
<div
	class="hidden md:inset-y-0 md:z-50 md:block transition-colors border-b border-border py-2 bg-surface"
>
	<div class={cn(containerVariants({ variant: 'full-padded' }), 'flex h-12 items-center flex-1')}>
		<a href="/" class="flex items-center justify-center h-12 w-12 rounded-lg transition-colors">
			<img class="h-9 w-auto dark:hidden" src={Logo} alt="LiftArcade check logo" />
			<img class="h-9 w-auto hidden dark:block" src={LogoDark} alt="LiftArcade check logo" />
		</a>
		<div class="text-border mx-4">/</div>
		<ul role="navigation" class="flex h-9 items-center flex-1 text-sm space-x-2">
			{#each navigation as navItem}
				<li class={cn('relative h-12 top-2', navItem.activeMatch && ' border-b-2 border-charge')}>
					<a href={navItem.href} class={cn(buttonVariants({ variant: 'navLink', size: 'sm' }))}>
						<div>{navItem.value}</div>
					</a>
				</li>
			{/each}
		</ul>

		<div class="ml-auto flex items-center space-x-2">
			<a href="/signin" class={cn(buttonVariants({ variant: 'ghost' }))}
				>Go To Dashboard <span class="ml-1">&rarr;</span></a
			>
			<button class={buttonVariants({ variant: 'outline', size: 'icon-lg' })}>
				<Sun tabindex="-1" class="h-6 w-6 outline-none" />
			</button>
		</div>
	</div>
</div>

<div class="z-40 flex items-center bg-surface border-b border-border h-16 md:hidden">
	<div class={cn(containerVariants({ variant: 'full-padded' }), 'flex grow items-center')}>
		<!-- Left navigation -->
		<div id="left_nav" class="flex items-center space-x-3">
			<!-- Logo Image -->
			<div id="logo" class="h-9 w-9 items-center justify-center flex">
				<img src={Logo} class="dark:hidden h-10 w-10" alt="LiftArcade check logo" />
				<img src={LogoDark} class="dark:block hidden h-10 w-10" alt="LiftArcade check logo" />
			</div>
			<!-- Separator -->
			<div class="text-border">/</div>
		</div>

		<!-- Menu Button -->
		<a href="/signin" class={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'ml-auto mr-3')}
			>Dashboard</a
		>
		<button
			type="button"
			class="h-10 w-10 items-center justify-center flex lg:hidden active:opacity-90 rounded-lg"
			on:click={toggleShowSidebar}
		>
			<span class="sr-only">Open sidebar</span>
			<Bars3 variation="outline" class="h-6 w-6" />
		</button>
	</div>
</div>
