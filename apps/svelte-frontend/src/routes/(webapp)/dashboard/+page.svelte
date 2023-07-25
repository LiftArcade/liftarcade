<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/Button.svelte';
	import { typographyVariants } from '$lib/components/ui/Typography.svelte';
	import { cn } from '$lib/utils/cn';
	import { Somerset } from 'somerset';
	import { Hashtag } from 'svelte-heros';
	import { TypeID } from 'typeid-js';

	function extractUUID(id: string) {
		// Convert from string to TypeID
		const typeID = TypeID.fromString(id);
		return typeID.getSuffix();
	}

	export let data;
</script>

<Somerset title="Dashboard - LiftArcade" description="This is a description" />

<div>
	<div class={typographyVariants({ variant: 'h2', color: 'default' })}>Dashboard</div>
	<div class={typographyVariants({ variant: 'muted', color: 'muted' })}>
		A quick overview of the past 7 days
	</div>
</div>

<div class="steel-container mt-12">
	<div class="grid grid-cols-8 space-x-6">
		<div class="card col-span-2">
			<div class="card-header">
				<div>Recent Workouts</div>
				<div class="header-icon">
					<Hashtag class="h-3 w-3 text-muted-foreground" />
				</div>
			</div>
			<div class="card-value">{data.workouts.length}</div>
		</div>

		<div class="card col-span-2">
			<div class="card-header">
				<div>Recent volume</div>
				<div class="header-icon">
					<Hashtag class="h-3 w-3 text-gray-500" />
				</div>
			</div>
			<div class="card-value">{data.recentWorkoutVolume}</div>
		</div>

		<div class="card col-span-2">
			<div class="card-header">
				<div>Recent Workouts</div>
				<div class="header-icon">
					<Hashtag class="h-3 w-3 text-gray-500" />
				</div>
			</div>
			<div class="card-value">{data.workouts.length}</div>
		</div>

		<div class="card col-span-2">
			<div class="card-header">
				<div>Recent Workouts</div>
				<div class="header-icon">
					<Hashtag class="h-3 w-3 text-gray-500" />
				</div>
			</div>
			<div class="card-value">{data.workouts.length}</div>
			<div class="card-footer">Past 2 days</div>
		</div>
	</div>

	<div class="flex space-x-6 mt-6">
		<div class="card col-span-5 flex-grow">Graph</div>
		<div class="card col-span-3 space-y-8 w-[420px]">
			<div class="flex items-center">
				<div class="flex-grow">
					<div class="text-xl font-semibold">Profile</div>
					<div class="text-sm font-medium text-gray-500">Your calculated profile information</div>
				</div>
				<div
					class="rounded-full border-gray-200 bg-white shadow-sm flex items-center justify-center border-2 h-11 w-11 text-center tabular-nums"
				>
					<div class="font-bold text-xl">32</div>
				</div>
			</div>

			<!-- <div class="space-y-6">
				{#each data.profile as [key, value]}
					<div class="flex items-center justify-between mt-4 space-x-6">
						<div class="text-base font-medium text-gray-900 leading-none">{key}</div>
						<hr class="block flex-grow border-dashed h-px border-gray-200" />
						<div class="text-base font-medium text-gray-700 leading-none w-6 text-center">
							{value}
						</div>
					</div>
				{/each}
			</div> -->

			<a class={cn(buttonVariants({ variant: 'default' }), 'w-full')} href="/dashboard/profile">
				Go to Profile
			</a>
		</div>
	</div>

	<div id="Recent Workouts" class="mt-16">
		<div class="header flex items-end">
			<h3 class="text-xl font-semibold text-text">Recent Workouts</h3>
			<a
				href="/dashboard/workouts"
				class={cn(buttonVariants({ variant: 'link' }), 'ml-auto text-sm font-medium text-gray-500')}
				>View All</a
			>
		</div>
		<div class="border-border border py-2">
			{#each data.workouts as workout}
				<div>
					<a
						href="/dashboard/workouts/{extractUUID(workout.id)}"
						class="flex items-center space-x-4"
					>
						<div class="flex-grow">
							<div class="text-sm font-medium text-text">
								{workout.performed_at.toLocaleDateString(undefined, {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</div>
						</div>
						<div class="text-sm font-medium text-gray-500">{workout.id}</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply border border-border rounded-xl p-6 shadow-sm;
		/* colors */
		@apply bg-surface;
	}

	.card-header {
		@apply flex tracking-tight text-sm font-medium text-secondary-foreground;
	}

	.header-icon {
		@apply ml-auto;
	}

	.card-value {
		@apply text-2xl font-bold;
	}

	.card-footer {
		@apply text-xs text-gray-500 flex items-center justify-between;
	}
</style>
