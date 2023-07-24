import type { Activity } from '@liftarcade/services-database/src/types';
import { writable } from 'svelte/store';

type WorkoutClient = {
	id?: string;
	performed_at: Date;
	activities: Partial<Activity>[];
};

export function createStore() {
	const { subscribe, set, update } = writable<WorkoutClient>({
		performed_at: new Date(),
		activities: []
	});

	function reset() {
		set({
			performed_at: new Date(),
			activities: []
		});
	}

	function addActivity(activity: Activity) {
		update((state) => {
			return {
				...state,
				activities: [...state.activities, activity]
			};
		});
	}

	function removeActivity(activtiy: Activity) {
		update((state) => {
			return {
				...state,
				activities: state.activities.filter((a) => a !== activtiy)
			};
		});
	}

	function moveActivityOneUp(activity: Activity) {
		update((state) => {
			const index = state.activities.indexOf(activity);
			if (index === 0) return state;
			const temporary = state.activities[index - 1];
			state.activities[index - 1] = state.activities[index];
			state.activities[index] = temporary;
			return {
				...state,
				activities: state.activities
			};
		});
	}

	function moveActivityOneDown(activity: Activity) {
		update((state) => {
			const index = state.activities.indexOf(activity);
			if (index === state.activities.length - 1) return state;
			const temporary = state.activities[index + 1];
			state.activities[index + 1] = state.activities[index];
			state.activities[index] = temporary;
			return {
				...state,
				activities: state.activities
			};
		});
	}

	return {
		subscribe,
		set,
		update,
		reset,
		addActivity,
		removeActivity,
		moveActivityOneUp,
		moveActivityOneDown
	};
}

export const workout = createStore();
