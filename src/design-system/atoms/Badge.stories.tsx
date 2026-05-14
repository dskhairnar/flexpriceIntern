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
	args: {
		variant: 'success',
	},
	parameters: {
		docs: {
			description: {
				story: 'Use the variant control to preview plan status labels across badge treatments.',
			},
		},
	},
	render: ({ variant }) => (
		<div className='flex flex-wrap gap-2'>
			<Badge variant={variant}>Plan - Active</Badge>
			<Badge variant={variant}>Plan - Archived</Badge>
		</div>
	),
};

export const SubscriptionStatuses: Story = {
	args: {
		variant: 'success',
	},
	parameters: {
		docs: {
			description: {
				story: 'Use the variant control to preview subscription status labels across badge treatments.',
			},
		},
	},
	render: ({ variant }) => (
		<div className='flex flex-wrap gap-2'>
			<Badge variant={variant}>Trialing</Badge>
			<Badge variant={variant}>Active</Badge>
			<Badge variant={variant}>Past due</Badge>
			<Badge variant={variant}>Canceled</Badge>
		</div>
	),
};

export const WithIcon: Story = {
	args: {
		children: 'Premium',
		variant: 'outline',
	},
	render: ({ children, variant }) => (
		<Badge variant={variant} icon={<Sparkles className='size-3.5' aria-hidden />}>
			{children}
		</Badge>
	),
};
