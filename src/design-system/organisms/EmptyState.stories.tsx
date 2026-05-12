import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Inbox } from 'lucide-react';
import { EmptyState } from './EmptyState';

const meta = {
	title: 'Design System/Organisms/EmptyState',
	component: EmptyState,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		actionLabel: { control: 'text' },
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: Inbox,
		title: 'No invoices yet',
		description: 'When your first invoice is generated it will appear in this list.',
		actionLabel: 'Create invoice',
		onAction: fn(),
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Invokes the CTA action', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /create invoice/i }));
			await expect(args.onAction).toHaveBeenCalled();
		});
	},
};

export const WithoutAction: Story = {
	args: {
		icon: Inbox,
		title: 'All caught up',
		description: 'There is nothing to review for this period.',
	},
};
