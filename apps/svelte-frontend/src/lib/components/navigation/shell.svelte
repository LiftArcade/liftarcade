<script lang="ts">
	import { page } from '$app/stores';

	let { user } = $props<{
		user: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
		};
	}>();

	import Logo from '$lib/assets/logo.svg';
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { cn } from '$lib/utils/cn';
	import { ListOrdered, PieChart, PlusCircle, SettingsIcon, UserCircle, Rss } from 'lucide-svelte';

	import Avatar from '$lib/components/ui/avatar.svelte';

	let navigation = $derived([
		{
			id: 'dashboard',
			href: '/dashboard',
			title: 'Dashboard',
			activeMatch: /^\/dashboard$/.test($page.url.pathname),
			icon: PieChart
		},
		{
			id: 'profile',
			title: 'Profile',
			href: '/dashboard/profile',
			activeMatch: /^\/dashboard\/profile/.test($page.url.pathname),
			icon: UserCircle
		},
		{
			id: 'workouts',
			title: 'My Workouts',
			href: '/dashboard/workouts',
			activeMatch: /^\/dashboard\/workouts/.test($page.url.pathname),
			icon: ListOrdered
		}
	]);

	let exploreNavigation = $derived([
		{
			id: 'exercises',
			href: '/explore/exercises',
			title: 'Exercises',
			activeMatch: /^\/explore\/exercises/.test($page.url.pathname),
			icon: PieChart
		},
		{
			id: 'workouts',
			title: 'Workouts',
			href: '/explore/workouts',
			activeMatch: /^\/explore\/workouts/.test($page.url.pathname),
			icon: ListOrdered
		}
	]);

	let workoutNavigation = $derived({
		id: ' addWorkout',
		href: '/create',
		title: 'Add workout',
		activeMatch: /^\/create/.test($page.url.pathname),
		icon: PlusCircle
	});

	let settingsLink = $derived({
		id: 'settings',
		href: '/settings',
		title: 'Settings',
		activeMatch: /^\/dashboard\/settings/.test($page.url.pathname),
		icon: SettingsIcon
	});

	let otherLinks = $derived([
		{
			id: 'blog',
			title: 'Blog',
			href: '/blog',
			activeMatch: /^\/blog/.test($page.url.pathname),
			icon: Rss
		}
	]);
</script>

<div class="grid grid-cols-[288px_auto]">
	<div class="sticky top-0 z-50 flex flex-col h-screen">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex grow flex-col bg-surface border-r border-border px-6 pb-4">
			<div class="flex h-16 shrink-0 items-center">
				<a class="flex items-center space-x-4" href="/">
					<img src={Logo} class="dark:hidden h-9 w-9" alt="LiftArcade Check" />
					<img src={LogoDark} class="dark:block hidden h-9 w-9" alt="LiftArcade Check" />
				</a>
			</div>
			<nav class="flex flex-1 flex-col gap-y-4">
				<ul role="list" class="flex shrink-0 flex-col gap-y-3">
					<li>
						<a
							href={workoutNavigation.href}
							class={cn(
								'group -mx-2 flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
								workoutNavigation.activeMatch
									? 'bg-primary text-surface'
									: 'bg-surface text-text-muted hover:bg-border hover:text-text'
							)}
						>
							{#if workoutNavigation.icon}
								<svelte:component this={workoutNavigation.icon} class="h-5 w-5" />
							{/if}
							Add workout
						</a>
					</li>
				</ul>

				<hr class="border-border" />
				<ul role="list" class="flex flex-1 flex-col gap-y-3">
					{#each navigation as navItem}
						<li>
							<a
								href={navItem.href}
								class={cn(
									'group -mx-2 flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
									navItem.activeMatch
										? 'bg-primary text-surface'
										: 'bg-surface text-text-muted hover:bg-border hover:text-text'
								)}
							>
								{#if navItem.icon}
									<svelte:component this={navItem.icon} class="h-5 w-5" />
								{/if}
								{navItem.title}
							</a>
						</li>
					{/each}
					<!-- Divider -->

					<div class="!mt-5 font-semibold text-lg">Explore</div>

					{#each exploreNavigation as navItem}
						<li>
							<a
								href={navItem.href}
								class={cn(
									'group -mx-2 flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
									navItem.activeMatch
										? 'bg-primary text-surface'
										: 'bg-surface text-text-muted hover:bg-border hover:text-text'
								)}
							>
								{#if navItem.icon}
									<svelte:component this={navItem.icon} class="h-5 w-5" />
								{/if}
								{navItem.title}
							</a>
						</li>
					{/each}
				</ul>

				<ul role="list" class="flex shrink-0 flex-col gap-y-3">
					{#each otherLinks as navItem, index}
						<li class={index === otherLinks.length - 1 ? '!mt-auto' : ''}>
							<a
								href={navItem.href}
								class={cn(
									'group -mx-2 flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
									navItem.activeMatch
										? 'bg-primary text-surface'
										: 'bg-surface text-text-muted hover:bg-border hover:text-text'
								)}
							>
								{#if navItem.icon}
									<svelte:component this={navItem.icon} class="h-5 w-5" />
								{/if}
								{navItem.title}
							</a>
						</li>
					{/each}
				</ul>

				<hr class="border-border" />
				<ul role="list" class="flex shrink-0 flex-col gap-y-3">
					<li class="h-12">
						{#if user && user?.email}
							<a
								href={settingsLink.href}
								class={cn(
									'group -mx-2 flex items-center gap-x-1 rounded-md p-2 text-sm leading-6 font-semibold h-12 hover:bg-border'
								)}
							>
								<div class="grow h-8 justify-start items-center gap-3 flex">
									<Avatar src={user.image || ''} initial="BM" />
									<div class="flex-col justify-start items-start inline-flex">
										<div class="text-text text-xs font-semibold">{user.name}</div>
										<div class="text-text-muted text-xs font-normal">Novice</div>
									</div>
								</div>
								<div
									class="w-8 h-4 bg-gray-900 rounded-3xl justify-center items-center gap-2.5 flex"
								>
									<div class="text-white text-xs font-semibold leading-3">Pro</div>
								</div>
							</a>
						{:else}
							<a
								href="/signin"
								class={cn(
									'-mx-2 flex justify-center rounded-md p-2 text-sm leading-6 font-semibold bg-primary text-white'
								)}
							>
								Sign in with social &rarr;
							</a>
						{/if}
					</li>
				</ul>
			</nav>
			<div class="text-center font-xs font-medium mt-3 -mx-2">
				<div class="text-[10px] text-text-muted mb-1">
					<a
						class="text-[10px] font-medium hover:underline hover:text-text text-text-muted"
						href="/terms">Terms and Conditions</a
					>
					-
					<a
						class="text-[10px] font-medium hover:underline hover:text-text text-text-muted"
						href="/cookies">Cookies</a
					>
					-
					<a
						class="text-[10px] font-medium hover:underline hover:text-text text-text-muted"
						href="/privacy">Privacy</a
					>
					-
					<a
						class="text-[10px] font-medium hover:underline hover:text-text text-text-muted"
						href="/help">Help</a
					>
				</div>
				<div class="text-text-muted text-[10px] font-medium leading-none">© 2023 LiftArcade</div>
			</div>
		</div>
	</div>

	<main class="py-16">
		<slot />
	</main>
</div>
