import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Button } from './Button';

const meta = {
	title: 'Design System/Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'ghost', 'danger'],
		},
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		children: { control: 'text' },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Save changes',
		variant: 'primary',
		size: 'md',
	},
};

export const Variants: Story = {
	render: () => (
		<div className='flex flex-wrap gap-3'>
			<Button variant='primary'>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='ghost'>Ghost</Button>
			<Button variant='danger'>Danger</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className='flex flex-wrap items-center gap-3'>
			<Button size='sm'>
				Small
			</Button>
			<Button size='md'>Medium</Button>
			<Button size='lg'>Large</Button>
		</div>
	),
};

export const Loading: Story = {
	args: {
		children: 'Processing invoice',
		loading: true,
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
	},
};

export const InteractionClick: Story = {
	args: {
		children: 'Click me',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Click invokes native button', async () => {
			const btn = canvas.getByRole('button', { name: /click me/i });
			await userEvent.click(btn);
			await expect(btn).toBeVisible();
		});
	},
};
