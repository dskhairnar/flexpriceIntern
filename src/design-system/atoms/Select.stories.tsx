import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';
import { SearchableSelect } from './Select';

const options = [
	{ value: 'cus_1', label: 'Northwind Traders' },
	{ value: 'cus_2', label: 'Contoso Labs' },
	{ value: 'cus_3', label: 'Fabrikam AI' },
	{ value: 'cus_4', label: 'Adventure Works' },
];

const meta = {
	title: 'Design System/Atoms/SearchableSelect',
	component: SearchableSelect,
	tags: ['autodocs'],
	argTypes: {
		disabled: { control: 'boolean' },
		placeholder: { control: 'text' },
	},
} satisfies Meta<typeof SearchableSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { options, value: null, onChange: () => {} },
	render: function R() {
		const [v, setV] = useState<string | null>(null);
		return <SearchableSelect label='Customer' options={options} value={v} onChange={setV} />;
	},
};

export const WithValue: Story = {
	args: { options, value: null, onChange: () => {} },
	render: function R() {
		const [v, setV] = useState<string | null>('cus_2');
		return <SearchableSelect options={options} value={v} onChange={setV} />;
	},
};

export const Disabled: Story = {
	args: { options, value: 'cus_1', onChange: () => {}, disabled: true },
	render: function R() {
		return <SearchableSelect options={options} value='cus_1' onChange={() => {}} disabled />;
	},
};

export const InteractionSelectOption: Story = {
	args: { options, value: null, onChange: () => {} },
	render: function R() {
		const [v, setV] = useState<string | null>(null);
		return <SearchableSelect label='Customer' options={options} value={v} onChange={setV} />;
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Open list and pick a row', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /customer:/i }));
			const search = canvas.getByRole('textbox', { name: /filter options/i });
			await userEvent.type(search, 'Contoso');
			await userEvent.click(canvas.getByRole('option', { name: /contoso labs/i }));
			await expect(canvas.getByRole('button', { name: /contoso labs/i })).toBeVisible();
		});
	},
};
