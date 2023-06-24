<script>
	let showSidebar = false;
	import { cubicIn, cubicInOut, cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import {
		XMark,
		Bars3,
		ChartBarSquare,
		UserCircle,
		QueueList,
		RectangleGroup,
		ListBullet
	} from 'svelte-heros';
	import Logo from '$lib/assets/landing-logo-icon.svg';
	import ProLabel from '$lib/components/ui/ProLabel.svelte';
	import AlphaLabel from '$lib/components/ui/AlphaLabel.svelte';

	function toggleShowSidebar() {
		showSidebar = !showSidebar;
	}

	function slowOut(node, { duration = 150, delay = 0 }) {
		return {
			delay,
			duration,
			css: (t) => {
				const eased = cubicOut(t);
				return `transform: translate(-${(1 - eased) * 100}%)`;
			}
		};
	}

	const navigation = [
		{
			id: 'dashboard',
			href: '/dashboard',
			value: 'Dashboard',
			icon: ChartBarSquare
		},
		{
			id: 'profile',
			href: '/profile',
			value: 'Profile',
			icon: UserCircle
		},
		{
			id: 'myWorkouts',
			href: '/workouts',
			value: 'My workouts',
			icon: QueueList
		}
	];

	const exploreNavigation = [
		{
			id: 'workouts',
			href: '/explore/workouts',
			value: 'Workouts',
			icon: RectangleGroup
		},
		{
			id: 'exercises',
			href: '/explore/exercises',
			value: 'Exercises',
			icon: ListBullet
		}
	];

	beforeNavigate(() => {
		showSidebar = false;
	});
</script>

<div>
	{#if showSidebar}
		<div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
			<div
				class="fixed inset-0 bg-gray-950/80"
				transition:fade={{ duration: 150, easing: cubicOut }}
			/>
			<div class="fixed inset-0 flex">
				<div class="relative mr-16 flex w-full max-w-xs flex-1" transition:slowOut>
					<div
						class="absolute left-full top-0 flex w-16 justify-center pt-5"
						transition:fade={{ duration: 150, easing: cubicInOut }}
					>
						<button type="button" class="-m-2.5 p-2.5" on:click={toggleShowSidebar}>
							<span class="sr-only">Close sidebar</span>
							<XMark class="h-6 w-6 text-white" />
						</button>
					</div>

					<!-- Sidebar component, swap this element with another sidebar if you like -->
					<div
						class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 px-6 pb-2"
					>
						<div class="flex h-16 shrink-0 items-center">
							<img class="h-8 w-auto dark:invert" src={Logo} alt="LiftArcade check logo" />
							<div class="ml-4">
								<AlphaLabel />
							</div>
						</div>
						<nav class="flex flex-1 flex-col">
							<ul role="list" class="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" class="-mx-2 space-y-1">
										{#each navigation as navItem}
											<li>
												<!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
												<a
													href={navItem.href}
													class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium text-foreground hover:text-primary hover:bg-muted"
												>
													<svelte:component this={navItem.icon} class="h-6 w-6" />
													{navItem.value}
												</a>
											</li>
										{/each}
									</ul>
								</li>
								<li>
									<div class="text-xs font-medium leading-6 text-foreground">Explore</div>
									<ul role="list" class="-mx-2 mt-2 space-y-1">
										{#each exploreNavigation as navItem}
											<li>
												<!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
												<a
													href={navItem.href}
													class="text-foreground hover:text-primary hover:bg-muted group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium"
												>
													<svelte:component this={navItem.icon} class="h-6 w-6" />
													<span class="truncate">{navItem.value}</span>
												</a>
											</li>
										{/each}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col transition-colors">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 px-6">
			<div class="flex h-16 shrink-0 items-center">
				<img class="h-8 w-auto dark:invert" src={Logo} alt="Your Company" />
				<div class="ml-4">
					<AlphaLabel />
				</div>
			</div>
			<nav class="flex flex-1 flex-col">
				<ul role="list" class="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" class="-mx-2 space-y-1">
							{#each navigation as navItem}
								<li>
									<!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
									<a
										href={navItem.href}
										class="text-foreground hover:text-primary hover:bg-muted group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium"
									>
										<svelte:component this={navItem.icon} class="h-6 w-6" />
										{navItem.value}
									</a>
								</li>
							{/each}
						</ul>
					</li>
					<li>
						<div class="text-base font-semibold leading-6 text-foreground">Explore</div>
						<ul role="list" class="-mx-2 mt-2 space-y-1">
							{#each exploreNavigation as navItem}
								<li>
									<!-- Current: "bg-indigo-700 text-white", Default: "text-indigo-200 hover:text-white hover:bg-indigo-700" -->
									<a
										href={navItem.href}
										class="text-foreground hover:text-primary hover:bg-muted group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium"
									>
										<svelte:component this={navItem.icon} class="h-6 w-6" />
										<span class="truncate">{navItem.value}</span>
									</a>
								</li>
							{/each}
						</ul>
					</li>

					<!-- Bottom of sidebar: User profile link -->
					<li class="mb-6 -mx-4 mt-auto">
						<a
							href="#settings"
							class="flex items-center gap-x-4 px-4 py-3 text-sm font-semmediumibold leading-6 text-white hover:bg-muted rounded-lg"
						>
							<img
								class="h-8 w-8 rounded-full bg-gray-700"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<span class="sr-only">Your profile</span>
							<span aria-hidden="true">Tom Cook</span>
							<span class="ml-auto"><ProLabel variant="dark" /></span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div
		class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-100 dark:bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
	>
		<button type="button" class="-m-2.5 p-2.5 lg:hidden" on:click={toggleShowSidebar}>
			<span class="sr-only">Open sidebar</span>
			<Bars3 variation="solid" class="h-6 w-6" />
		</button>
		<div class="flex-1 text-sm font-medium leading-6 text-white">Dashboard</div>
		<a href="#">
			<span class="sr-only">Your profile</span>
			<img
				class="h-8 w-8 rounded-full bg-gray-700"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</a>
	</div>

	<main class="py-10 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-8 bg-gray">
			<slot />
		</div>
	</main>
</div>
