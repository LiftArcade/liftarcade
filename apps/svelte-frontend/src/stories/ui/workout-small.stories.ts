import type { Meta, StoryObj } from '@storybook/svelte';

// import Avatar from '$lib/components/ui/Avatar.svelte';
import Workout from '$lib/components/Workout.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'UI/Workout',
	component: Workout,
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		href: {
			type: 'string'
		},
		dateString: {
			type: 'string'
		},
		templateString: {
			type: 'string'
		},
		exerciseNames: {
			odd: {
				control: 'object'
			}
		},
		accessoryInfo: {
			odd: {
				control: 'object'
			}
		}
	}
} satisfies Meta<Workout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Main: Story = {
	args: {
		href: '#',
		dateString: 'Tues, Mar 24, 2012',
		templateString: 'custom',
		exerciseNames: ['Deadlift', 'Squat', 'Bench Press'],
		accessoryInfo: ['3.4 met tons', '4 exercises', 'custom']
	}
};
