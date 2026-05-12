import type { Meta, StoryObj } from '@storybook/react';
import { UsageBar } from './UsageBar';

const meta = {
	title: 'Design System/Molecules/UsageBar',
	component: UsageBar,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		used: { control: 'number' },
		entitled: { control: 'number' },
	},
} satisfies Meta<typeof UsageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'API calls (this period)',
		used: 42_000,
		entitled: 100_000,
	},
};

export const NearLimit: Story = {
	args: {
		label: 'Seats in use',
		used: 95,
		entitled: 100,
	},
};

export const ZeroUsage: Story = {
	args: {
		label: 'Credits consumed',
		used: 0,
		entitled: 5000,
	},
};
