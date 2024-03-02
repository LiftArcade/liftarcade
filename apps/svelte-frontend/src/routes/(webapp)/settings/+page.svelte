<script lang="ts">
	import { enhance } from '$app/forms';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { CreditCard, UserCircle } from 'lucide-svelte';

	export let data;

	const sideNavLinks = [
		{
			id: 'profile',
			label: 'Profile',
			icon: UserCircle,
			href: '#profile'
		},
		{
			id: 'billing',
			label: 'Billing',
			icon: CreditCard,
			href: '#billing'
		}
	];
</script>

<div class="lg:flex lg:gap-x-16">
	<aside
		class="flex overflow-x-hidden border-b border-border py-4 lg:block lg:w-64 lg:flex-none lg:border-0 relative"
	>
		<nav class="flex-none px-4 sm:px-6 lg:px-0">
			<ul role="list" class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
				{#each sideNavLinks as { label, icon, href }}
					<li>
						<a
							{href}
							class="text-text group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
						>
							{#if icon}
								<svelte:component this={icon} class="h-6 w-6 shrink-0 text-text" />
							{/if}
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
</div>

<div class="max-x-3xl mx-auto mt-12">
	<h1>Settings</h1>
	<div>
		<h2>Account</h2>
		<div>
			<form method="POST">
				<button class={buttonVariants({ variant: 'destructive' })}> Sign Out </button>
			</form>
		</div>
	</div>

	<div>
		<h2>Units</h2>
	</div>
</div>
