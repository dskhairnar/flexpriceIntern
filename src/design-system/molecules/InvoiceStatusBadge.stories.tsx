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
	render: () => (
		<div className='flex flex-wrap gap-2'>
			<InvoiceStatusBadge status='paid' />
			<InvoiceStatusBadge status='draft' />
			<InvoiceStatusBadge status='void' />
			<InvoiceStatusBadge status='open' />
			<InvoiceStatusBadge status='uncollectible' />
		</div>
	),
};

export const UnknownStatus: Story = {
	args: { status: 'processing' },
};
