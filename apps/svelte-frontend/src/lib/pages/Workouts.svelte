<script lang="ts">
	import Workout from '$lib/components/Workout.svelte';
	import { buttonVariants } from '$lib/components/ui/Button.svelte';
	import { containerVariants } from '$lib/components/ui/Container.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import { cn } from '$lib/utils/cn';
	import type { workout } from '@liftarcade/services-database';
	import type { InferModel } from 'drizzle-orm';
	import { extractUUID } from '$lib/utils/typeid';

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

	$: workoutComputed = workouts.map((workout) => {
		return {
			...workout,
			href: `/dashboard/workouts/${extractUUID(workout.id)}`,
			dateString: new Date(workout.performed_at).toLocaleDateString('en-US', {
				weekday: 'short',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}),
			exerciseNames: workout.activitiesJSON.map((activity) => activity.exerciseName)
		};
	});
</script>

<div>
	<!-- Hero BG Image -->
	<div class="relative w-full bg-surface border-b border-border pb-2 pt-12">
		<img
			src="http://placebeard.it/300/300"
			alt="hero"
			class="appearance-none custom-gradient pointer-events-none object-cover object-center absolute inset-0 h-full z-0"
		/>
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
				{#each workoutComputed as { dateString, href, exerciseNames }}
					<Workout
						{dateString}
						{href}
						{exerciseNames}
						templateString="Custom"
						accessoryInfo={['test']}
					/>
				{/each}
				<!-- Pagination -->
				<div class="flex justify-between">
					<a
						href={`/dashboard/workouts?page=${currentWorkoutPage - 1}`}
						class={cn(buttonVariants({ variant: 'default' }))}
						disabled={currentWorkoutPage === 1}>Previous Page</a
					>
					<button class={cn(buttonVariants({ variant: 'default' }))} disabled={workouts.length <= 3}
						>Next Page</button
					>
				</div>
			</div>
		</div>
		<!-- Pages -->
		<div />
	</div>
</div>

<style>
	.custom-gradient {
		opacity: 0.1;
		filter: saturate(0);
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
</style>
