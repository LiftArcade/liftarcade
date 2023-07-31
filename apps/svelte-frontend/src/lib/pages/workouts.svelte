<script lang="ts">
	import Workout from '$lib/components/workout.svelte';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';
	import { cn } from '$lib/utils/cn';
	import type { workout } from '@liftarcade/services-database';

	import type { InferModel } from 'drizzle-orm';

	export let workouts: InferModel<typeof workout>[] | undefined;
	export let currentWorkoutPage: number; // The current page of workouts we are on.

	export let currentPath: string; // Allows us to determine which nav item is active.

	$: navigation = [
		{
			id: 'myworkouts',
			href: '/dashboard/workouts',
			value: 'My Workouts',
			activeMatch: /^\/dashboard\/workouts$/.test(currentPath)
		},
		{
			id: 'saved',
			href: '/dashboard/workouts/saved',
			value: 'Saved workouts',
			activeMatch: /^\/dashboard\/workouts\/saved/.test(currentPath)
		}
	];
</script>

<div>
	<!-- Hero BG Image -->
	<div class="relative w-full border-b border-border pb-2 pt-12 bg-gray-50 dark:bg-surface">
		<div class={cn(containerVariants({ variant: 'full-padded' }), 'relative z-10')}>
			<a href="/dashboard" class="text-text-muted hover:underline text-sm font-medium">Dashboard</a>
		</div>
		<div class={cn(containerVariants({ variant: 'full-padded' }), 'relative z-10')}>
			<h1 class={cn(typographyVariants({ variant: 'h2' }))}>Workouts</h1>
		</div>
		<div class="mt-32 z-10">
			<ul
				role="navigation"
				class={cn(
					containerVariants({ variant: 'full-padded' }),
					'flex h-9 items-center flex-1 text-sm space-x-3'
				)}
			>
				{#each navigation as navItem}
					<li class={cn('relative h-11 top-1', navItem.activeMatch && ' border-b-2 border-charge')}>
						<a
							href={navItem.href}
							class="flex text-text h-9 px-3 gap-2 font-medium items-center cursor-pointer hover:text-primary transition-colors hover:bg-border duration-75 rounded-lg active:opacity-90"
						>
							<div>{navItem.value}</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- list of workouts -->
	<div class="mt-14">
		<div class={cn(containerVariants({ variant: 'full-padded' }), 'md:grid md:grid-cols-10')}>
			<div class="flex flex-col space-y-6 flex-1 col-span-7">
				{#each workouts as workout}
					<Workout {workout} />
				{/each}
				<!-- Pagination -->
				<div class="flex justify-between">
					{#if currentWorkoutPage > 1}
						<a
							href={`/dashboard/workouts?page=${currentWorkoutPage - 1}`}
							class={cn(buttonVariants({ variant: 'default' }))}>Previous Page</a
						>
					{:else}
						<button
							class={cn(buttonVariants({ variant: 'ghost' }))}
							disabled={currentWorkoutPage === 1}>Previous Page</button
						>
					{/if}
					<button class={cn(buttonVariants({ variant: 'ghost' }))} disabled={workouts.length <= 3}
						>Next Page</button
					>
				</div>
			</div>
		</div>
		<!-- Pages -->
		<div />
	</div>
</div>
