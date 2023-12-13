import type { Activity } from '@liftarcade/services-database/src/types';

class WorkoutClient {
	id?: string = $state();
	performed_at = $state(new Date());
	activities: Partial<Activity>[] = $state([]);
}

const workout = new WorkoutClient();

function reset() {
	workout.performed_at = new Date();
	workout.activities = [];
}

function addActivity(activity: Activity) {
	workout.activities = [...workout.activities, activity];
}

function removeActivity(activity: Activity) {
	workout.activities = workout.activities.filter((a) => a !== activity);
}

function moveActivityOneUp(activity: Activity) {
	const index = workout.activities.indexOf(activity);
	if (index === 0) return;
	const temporary = workout.activities[index - 1];
	workout.activities[index - 1] = workout.activities[index];
	workout.activities[index] = temporary;
	console.log(temporary);
	workout.activities = [...workout.activities];
}

function moveActivityOneDown(activity: Activity) {
	const index = workout.activities.indexOf(activity);
	if (index === workout.activities.length - 1) return;
	const temporary = workout.activities[index + 1];
	workout.activities[index + 1] = workout.activities[index];
	workout.activities[index] = temporary;
	workout.activities = [...workout.activities];
}

export { workout, reset, addActivity, removeActivity, moveActivityOneUp, moveActivityOneDown };
