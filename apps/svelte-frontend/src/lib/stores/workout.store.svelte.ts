import type { Activity } from '@liftarcade/exercises-lib';

//
class WorkoutClient {
	id?: string = $state();

	performed_at = $state<string>(new Date().toISOString().split('T')[0]);
	activities: Partial<Activity>[] = $state([]);

	// Used to add an activity to the workout
	addActivity(activity: Activity) {
		this.activities.push(activity);
		console.log(this.activities);
	}

	// Reset requires the local timezone so it can set the date appropriately.
	reset() {
		this.performed_at = new Date().toISOString().split('T')[0];
		this.activities = [];
	}

	removeActivity(activity: Partial<Activity>) {
		this.activities = this.activities.filter((a) => a !== activity);
	}

	moveActivityOneUp(activity: Partial<Activity>) {
		const index = this.activities.indexOf(activity);
		if (index === 0) return;
		const temporary = this.activities[index - 1];
		this.activities[index - 1] = this.activities[index];
		this.activities[index] = temporary;
		this.activities = [...this.activities];
	}

	moveActivityOneDown(activity: Partial<Activity>) {
		const index = this.activities.indexOf(activity);
		if (index === this.activities.length - 1) return;
		const temporary = this.activities[index + 1];
		this.activities[index + 1] = this.activities[index];
		this.activities[index] = temporary;
		this.activities = [...this.activities];
	}

	toJSON() {
		return JSON.stringify({
			id: this.id,
			performed_at: this.performed_at,
			activities: this.activities
		});
	}
}

const workout = new WorkoutClient();

export { workout };
