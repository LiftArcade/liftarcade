<script lang="ts">
	import type { workout as drizzleWorkout } from '@liftarcade/services-database';
	import type { InferModel } from 'drizzle-orm';
	import { extractUUID } from '$lib/utils/typeid';

	// Switch to handling the logic of display of workout internally.
	export let workout: InferModel<typeof drizzleWorkout> | undefined;

	// Extract activity names
	let exerciseNames = workout?.activitiesJSON?.map((activity) => activity.exercise.name) ?? [];

	// Get the first three exercise names as a preview
	let dateString = workout?.performed_at?.toLocaleDateString() ?? '';
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
			{#if !exerciseNames.length}
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
