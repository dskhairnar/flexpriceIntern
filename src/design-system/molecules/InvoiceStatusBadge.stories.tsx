import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceStatusBadge } from './InvoiceStatusBadge';

const meta = {
	title: 'Design System/Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	tags: ['autodocs'],
	argTypes: {
		status: { control: 'text' },
	},
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { status: 'paid' },
};

export const AllStatuses: Story = {
	args: { status: 'paid' },
	render: (args) => (
		<div className='space-y-3'>
			<div className='flex items-center gap-2'>
				<span className='text-sm text-muted-foreground'>Controlled status:</span>
				<InvoiceStatusBadge {...args} />
			</div>
			<div className='flex flex-wrap gap-2 border-t border-border pt-3'>
				<InvoiceStatusBadge status='paid' />
				<InvoiceStatusBadge status='draft' />
				<InvoiceStatusBadge status='void' />
				<InvoiceStatusBadge status='open' />
				<InvoiceStatusBadge status='uncollectible' />
			</div>
		</div>
	),
};

export const UnknownStatus: Story = {
	args: { status: 'processing' },
};
