<script lang="ts">
	import type { workout as drizzleWorkout } from '@liftarcade/services-database';
	import { extractUUID } from '$lib/utils/typeid';
	import { getLocalTimeZone, parseDate } from '@internationalized/date';

	// Switch to handling the logic of display of workout internally.
	export let workout: typeof drizzleWorkout.$inferSelect;

	// Extract activity names
	let exerciseNames = workout?.activitiesJSON?.map((activity) => activity.exercise.name) ?? [];

	console.log('Workout', workout);

	// Make the date completed Pretty.
	let dateString = parseDate(workout?.performed_at)
		.toDate(getLocalTimeZone())
		.toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});

	let exerciseString = exerciseNames.slice(0, 3).join(', ');
	let href = `/dashboard/workouts/${extractUUID(workout?.id)}`;
	$: {
		if (exerciseNames.length > 3) {
			exerciseString += ` + ${exerciseNames.length - 3} others`;
		}
	}

	let accessoryString = 'Test';
</script>

<div class="bg-surface border-border border py-8 px-6 rounded-xl text-text-muted text-sm">
	<div id="top-row" class="block md:flex items-end">
		<a
			{href}
			class="text-text hover:text-charge font-bold transition-colors text-xl text-ellipsis line-clamp-1"
			>{dateString}</a
		>
		<div class="ml-auto line-clamp-1 mt-1">Custom</div>
	</div>
	<div class="block md:flex items-center">
		<div class="line-clamp-1 mt-1">
			{#if exerciseNames.length === 0}
				<div class="italic">No exercises provided</div>
			{:else}
				{exerciseString}
			{/if}
		</div>
		<div class="ml-auto line-clamp-1 mt-1">
			{accessoryString}
		</div>
	</div>
</div>
