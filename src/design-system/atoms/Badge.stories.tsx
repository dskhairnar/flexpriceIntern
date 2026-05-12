import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Sparkles } from 'lucide-react';

const meta = {
	title: 'Design System/Atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'danger', 'muted', 'outline'],
		},
		children: { control: 'text' },
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Active',
		variant: 'success',
	},
};

export const PlanStatuses: Story = {
	render: () => (
		<div className='flex flex-wrap gap-2'>
			<Badge variant='success'>Plan · Active</Badge>
			<Badge variant='muted'>Plan · Archived</Badge>
		</div>
	),
};

export const SubscriptionStatuses: Story = {
	render: () => (
		<div className='flex flex-wrap gap-2'>
			<Badge variant='success'>Trialing</Badge>
			<Badge variant='default'>Active</Badge>
			<Badge variant='warning'>Past due</Badge>
			<Badge variant='danger'>Canceled</Badge>
		</div>
	),
};

export const WithIcon: Story = {
	args: {
		children: 'Premium',
		variant: 'outline',
		icon: <Sparkles className='size-3.5' aria-hidden />,
	},
};
