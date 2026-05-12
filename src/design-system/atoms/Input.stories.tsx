import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';
import { Input } from './Input';

const meta = {
	title: 'Design System/Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className='w-[360px]'>
				<Story />
			</div>
		),
	],
	argTypes: {
		type: { control: 'select', options: ['text', 'number', 'email', 'password'] },
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		disabled: { control: 'boolean' },
		label: { control: 'text' },
		placeholder: { control: 'text' },
		error: { control: 'text' },
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Display name',
		placeholder: 'Acme Inc.',
	},
};

export const NumberField: Story = {
	args: {
		label: 'Seats',
		type: 'number',
		placeholder: '10',
	},
};

export const WithError: Story = {
	args: {
		label: 'Email',
		type: 'email',
		placeholder: 'you@company.com',
		error: 'Enter a valid work email',
	},
};

export const CurrencyPrefix: Story = {
	render: function Currency() {
		const [v, setV] = useState('49.00');
		return (
			<Input label='Unit price' value={v} onChange={(e) => setV(e.target.value)} prefix={<span className='text-muted-foreground'>$</span>} />
		);
	},
};

export const InteractionType: Story = {
	render: function Controlled() {
		const [v, setV] = useState('');
		return <Input label='Memo' placeholder='Add an internal note' value={v} onChange={(e) => setV(e.target.value)} />;
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('User can type into the field', async () => {
			const input = canvas.getByRole('textbox', { name: /memo/i });
			await userEvent.type(input, 'Hello FlexPrice');
			await expect(input).toHaveValue('Hello FlexPrice');
		});
	},
};
