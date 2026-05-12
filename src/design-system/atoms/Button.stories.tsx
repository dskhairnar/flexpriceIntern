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
		asChild: { table: { disable: true } },
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
	parameters: {
		controls: { exclude: ['variant'] },
	},
	args: {
		children: 'Button',
		size: 'md',
		loading: false,
		disabled: false,
	},
	render: ({ children, size, loading, disabled }) => (
		<div className='space-y-4'>
			<div className='flex flex-wrap gap-3'>
				<Button variant='primary' size={size} loading={loading} disabled={disabled}>
					{children} primary
				</Button>
				<Button variant='secondary' size={size} loading={loading} disabled={disabled}>
					{children} secondary
				</Button>
				<Button variant='ghost' size={size} loading={loading} disabled={disabled}>
					{children} ghost
				</Button>
				<Button variant='danger' size={size} loading={loading} disabled={disabled}>
					{children} danger
				</Button>
			</div>
			<p className='text-xs text-muted-foreground'>Use Controls to apply size, loading, disabled, and label text across every variant.</p>
		</div>
	),
};

export const Sizes: Story = {
	args: {
		children: 'Resizable button',
		variant: 'primary',
		size: 'md',
		loading: false,
		disabled: false,
	},
	render: (args) => (
		<div className='space-y-4'>
			<Button {...args} />
			<div className='flex flex-wrap items-center gap-3 border-t border-border pt-4'>
				<Button variant={args.variant} size='sm' loading={args.loading} disabled={args.disabled}>
					Small reference
				</Button>
				<Button variant={args.variant} size='md' loading={args.loading} disabled={args.disabled}>
					Medium reference
				</Button>
				<Button variant={args.variant} size='lg' loading={args.loading} disabled={args.disabled}>
					Large reference
				</Button>
			</div>
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
