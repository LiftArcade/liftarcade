import type { Meta, StoryObj } from '@storybook/svelte';

import Navigation from '$lib/components/navigation/Navigation.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Navigation/AppNavigation',
	component: Navigation,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		userImageUrl: {
			type: 'string',
			defaultValue: 'https://placebeard.it/120x120'
		},
		userName: {
			type: 'string',
			defaultValue: 'Bryce McDaniel'
		}
	}
} satisfies Meta<Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Main: Story = {
	args: {
		userImageUrl: 'https://placebeard.it/120x120',
		userName: 'Bryce McDaniel'
	}
};
