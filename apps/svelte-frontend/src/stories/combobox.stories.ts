import type { Meta, StoryObj } from '@storybook/svelte';

import Combobox from '$lib/components/combobox.svelte';
// import { exercises } from '@liftarcade/exercises-lib';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Combobox',
	component: Combobox,
	argTypes: {}
} satisfies Meta<Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {}
};
