import type { Meta, StoryObj } from '@storybook/svelte';

import Avatar from '$lib/components/ui/Avatar.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'UI/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		initial: {
			type: 'string'
		},
		src: {
			type: 'string'
		},
		size: {
			type: 'string'
		}
	}
} satisfies Meta<Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Main: Story = {
	args: {
		initial: 'B',
		src: 'https://placebeard.it/80x80',
		size: '40'
	}
};
