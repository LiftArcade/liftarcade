import type { Meta, StoryObj } from '@storybook/svelte';

// import Avatar from '$lib/components/ui/Avatar.svelte';
import WorkoutPage from '$lib/pages/workouts.svelte';
import type { workout } from '@liftarcade/services-database';
import type { InferModel } from 'drizzle-orm';

const exampleWorkouts: InferModel<typeof workout>[] = [
	{
		id: 'testesfsdf',
		performed_at: new Date(),
		activitiesJSON: [],
		created_at: new Date(),
		updated_at: new Date(),
		public_id: 'TEWTWETWET',
		owner_id: 'me'
	},
	{
		id: 'testesfsdf',
		performed_at: new Date(),
		activitiesJSON: [],
		created_at: new Date(),
		updated_at: new Date(),
		public_id: 'TEWTWETWET',
		owner_id: 'me'
	},
	{
		id: 'testesfsdf',
		performed_at: new Date(),
		activitiesJSON: [],
		created_at: new Date(),
		updated_at: new Date(),
		public_id: 'TEWTWETWET',
		owner_id: 'me'
	},
	{
		id: 'testesfsdf',
		performed_at: new Date(),
		activitiesJSON: [],
		created_at: new Date(),
		updated_at: new Date(),
		public_id: 'TEWTWETWET',
		owner_id: 'me'
	}
];

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Pages/Dashboard/Workout',
	component: WorkoutPage,
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		totalPages: {
			type: 'number'
		},
		currentWorkoutPage: {
			type: 'number'
		},
		workouts: {
			odd: {
				control: 'object'
			}
		}
	}
} satisfies Meta<WorkoutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Main: Story = {
	args: {
		totalPages: 5,
		currentWorkoutPage: 1,
		workouts: exampleWorkouts,
		currentPath: '/dashboard/workouts'
	}
};
