import type { Meta, StoryObj } from '@storybook/react';
import { PricingTierTable } from './PricingTierTable';

const tiers = [
	{ tier: '1', from: 0, to: 10_000, unitPrice: '$0.010', flatFee: '$0' },
	{ tier: '2', from: 10_001, to: 100_000, unitPrice: '$0.008', flatFee: '$0' },
	{ tier: '3', from: 100_001, to: null, unitPrice: '$0.006', flatFee: '$500 / mo' },
];

const meta = {
	title: 'Design System/Organisms/PricingTierTable',
	component: PricingTierTable,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		tiers: { table: { disable: true } },
	},
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Graduated pricing - API events',
		tiers,
	},
};

export const VolumeTiers: Story = {
	args: {
		title: 'Volume pricing - Seats',
		tiers: [
			{ tier: 'A', from: 1, to: 50, unitPrice: '$12.00', flatFee: '-' },
			{ tier: 'B', from: 51, to: 200, unitPrice: '$10.00', flatFee: '-' },
			{ tier: 'C', from: 201, to: null, unitPrice: '$8.00', flatFee: '-' },
		],
	},
};
