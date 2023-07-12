import { writable } from 'svelte/store';

type WorkoutClient = {
	performed_at: Date;
	activities: [];
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

	function addActivity(activity) {
		update((state) => {
			return {
				...state,
				activities: [...state.activities, activity]
			};
		});
	}

	function removeActivity(activtiy) {
		update((state) => {
			return {
				...state,
				activities: state.activities.filter((a) => a !== activtiy)
			};
		});
	}

	function moveActivityOneUp(activity) {
		update((state) => {
			const index = state.activities.findIndex((a) => a === activity);
			if (index === 0) return state;
			const temp = state.activities[index - 1];
			state.activities[index - 1] = state.activities[index];
			state.activities[index] = temp;
			return {
				...state,
				activities: state.activities
			};
		});
	}

	function moveActivityOneDown(activity) {
		update((state) => {
			const index = state.activities.findIndex((a) => a === activity);
			if (index === state.activities.length - 1) return state;
			const temp = state.activities[index + 1];
			state.activities[index + 1] = state.activities[index];
			state.activities[index] = temp;
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
