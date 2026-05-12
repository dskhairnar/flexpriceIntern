import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { SearchBar } from './SearchBar';

const meta = {
	title: 'Design System/Molecules/SearchBar',
	component: SearchBar,
	tags: ['autodocs'],
	argTypes: {
		debounceMs: { control: { type: 'number', min: 0, max: 2000, step: 50 } },
		placeholder: { control: 'text' },
		onSearch: { table: { disable: true } },
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { debounceMs: 300, placeholder: 'Search customers...', onSearch: fn() },
	render: function R(args) {
		const [q, setQ] = useState('');
		return (
			<div className='space-y-2'>
				<SearchBar {...args} onSearch={(value) => { setQ(value); args.onSearch(value); }} />
				<p className='text-xs text-muted-foreground'>Debounced query: {q || '-'}</p>
			</div>
		);
	},
};

export const InteractionClear: Story = {
	args: { debounceMs: 300, onSearch: fn(), placeholder: 'Search...' },
	render: function R(args) {
		const [q, setQ] = useState('');
		return (
			<div className='space-y-2'>
				<SearchBar {...args} onSearch={(value) => { setQ(value); args.onSearch(value); }} />
				<p className='text-xs text-muted-foreground'>Last query: {q || '-'}</p>
			</div>
		);
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Type then clear search', async () => {
			const input = canvas.getByRole('textbox', { name: /search/i });
			await userEvent.type(input, 'invoice');
			await expect(input).toHaveValue('invoice');
			await userEvent.click(canvas.getByRole('button', { name: /clear search/i }));
			await expect(input).toHaveValue('');
		});
	},
};
