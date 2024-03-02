<script lang="ts">
	export let userName: string;
	export let userImageUrl: string;

	import { page } from '$app/stores';

	let showSidebar = false;
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import { XMark, Bars3, PlusCircle } from 'svelte-heros-v2';
	import Logo from '$lib/assets/logo.svg';
	import LogoDark from '$lib/assets/logo-dark.svg';
	import Avatar from '../ui/avatar.svelte';
	import { cn } from '$lib/utils/cn';
	import { containerVariants } from '../ui/container.svelte';

	import FeedbackModal from '../ui/feedback-modal.svelte';
	import { buttonVariants } from '../ui/button.svelte';

	function toggleShowSidebar() {
		showSidebar = !showSidebar;
	}

	function slowOut(node: HTMLElement, { duration = 150, delay = 0 }) {
		return {
			delay,
			duration,
			css: (t: number) => {
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
			id: 'dashboard',
			href: '/dashboard',
			value: 'Dashboard',
			// eslint-disable-next-line svelte/valid-compile
			activeMatch: /^\/dashboard/.test($page.url.pathname)
		},
		{
			id: 'explore',
			href: '/explore',
			value: 'Explore',
			activeMatch: /^\/explore/.test($page.url.pathname)
		}
	];

	const leftNavigation = [
		{
			id: 'Guide',
			href: '/guide',
			value: 'Guide'
		},
		{
			id: 'docs',
			href: '/docs',
			value: 'Docs'
		}
	];

	beforeNavigate(() => {
		showSidebar = false;
	});
</script>

/** eslint-disable svelte/valid-compile */
<div>
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
						class="flex grow flex-col gap-y-5 overflow-y-auto bg-surface px-6 pb-2 border-r border-border shadow-xl"
					>
						<div class="flex h-16 shrink-0 items-center">
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
								<!-- Profile image -->
								<a href="/settings">
									<span class="sr-only">Your profile</span>
									<img class="h-8 w-8 rounded-full bg-gray-700" src={userImageUrl} alt="Profile" />
								</a>
							</div>
						</div>
						<nav class="flex flex-1 flex-col">
							<ul class="flex flex-1 flex-col">
								<li>
									<!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
									<a
										href="/create"
										class="text-foreground hover:text-primary hover:bg-muted group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium -mx-2"
									>
										<PlusCircle tabindex={-1} variation="outline" class="h-6 w-6" />
										<span class="truncate">Add workout</span>
									</a>
								</li>
								<hr class="my-3 border-muted" />
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
			<img class="h-9 w-auto dark:hidden" src={Logo} alt="LiftArcade check logo" />
			<img class="h-9 w-auto hidden dark:block" src={LogoDark} alt="LiftArcade check logo" />
			<div class="text-border ml-4">/</div>
			<div class="ml-4 flex items-center text-sm text-text space-x-2 font-medium">
				<Avatar src={userImageUrl} initial={userName?.[0]} size="32" />
				<div>{userName}</div>
			</div>

			<div class="ml-auto flex items-center">
				<FeedbackModal />
				<div class="text-border mx-2">/</div>
				{#each leftNavigation as navItem}
					<a
						href={navItem.href}
						class="flex items-center text-sm text-text-muted space-x-2 font-medium hover:text-text rounded-lg px-3 py-1 active:opacity-90"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>{navItem.value}</div>
					</a>
				{/each}
			</div>
		</div>
		<ul
			role="navigation"
			class={cn(
				containerVariants({ variant: 'full-padded' }),
				'flex h-9 items-center mt-2 flex-1 text-sm space-x-3'
			)}
		>
			<li
				class={cn(
					'relative h-11 top-1 -ml-2',
					/^\/create/.test($page.url.pathname) && ' border-b-2 border-charge'
				)}
			>
				<a href="/create" class={cn(buttonVariants({ variant: 'navLink', size: 'sm' }))}>
					<svelte:component this={PlusCircle} class="h-5 w-5 mr-2" tabindex={-1} />
					<div>Add workout</div>
				</a>
			</li>

			<div class="text-border ml-4">/</div>

			{#each navigation as navItem}
				<li class={cn('relative h-11 top-1', navItem.activeMatch && ' border-b-2 border-charge')}>
					<a href={navItem.href} class={cn(buttonVariants({ variant: 'navLink', size: 'sm' }))}>
						<div>{navItem.value}</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="z-40 flex items-center bg-surface border-b border-border h-16 md:hidden">
		<div class={cn(containerVariants({ variant: 'full-padded' }), 'flex grow')}>
			<!-- Left navigation -->
			<div id="left_nav" class="flex items-center space-x-3">
				<!-- Logo Image -->
				<div id="logo" class="h-9 w-9 items-center justify-center flex">
					<img src={Logo} class="dark:hidden h-10 w-10" alt="LiftArcade check logo" />
					<img src={LogoDark} class="dark:block hidden h-10 w-10" alt="LiftArcade check logo" />
				</div>
				<!-- Separator -->
				<div class="text-border">/</div>
				<!-- Profile image -->
				<a href="/settings">
					<span class="sr-only">Your profile</span>
					<img class="h-8 w-8 rounded-full bg-gray-700" src={userImageUrl} alt="Profile" />
				</a>
			</div>

			<!-- Menu Button -->
			<button
				type="button"
				class="h-10 w-10 items-center justify-center flex lg:hidden active:opacity-90 rounded-lg ml-auto"
				on:click={toggleShowSidebar}
			>
				<span class="sr-only">Open sidebar</span>
				<Bars3 class="h-6 w-6" />
			</button>
		</div>
	</div>
</div>
