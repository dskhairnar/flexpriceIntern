import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta = {
	title: 'Design System/Molecules/MetricCard',
	component: MetricCard,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		value: { control: 'text' },
		trend: { control: { type: 'number', min: -50, max: 50, step: 0.1 } },
	},
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'MRR',
		value: '$128,400',
		trend: 4.2,
	},
};

export const FlatTrend: Story = {
	args: {
		label: 'Active subscriptions',
		value: '3,482',
		trend: 0,
	},
};

export const NegativeTrend: Story = {
	args: {
		label: 'Churned revenue',
		value: '$2,100',
		trend: -1.8,
	},
};
