import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
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
		label: { control: 'text' },
		disabled: { control: 'boolean' },
		placeholder: { control: 'text' },
		value: {
			control: 'select',
			options: [null, 'cus_1', 'cus_2', 'cus_3', 'cus_4'],
		},
		options: { table: { disable: true } },
		onChange: { table: { disable: true } },
	},
} satisfies Meta<typeof SearchableSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { label: 'Customer', options, value: null, onChange: () => {}, placeholder: 'Select customer...' },
	render: function R(args) {
		const [, updateArgs] = useArgs();
		return <SearchableSelect {...args} onChange={(next) => { updateArgs({ value: next }); args.onChange(next); }} />;
	},
};

export const WithValue: Story = {
	args: { label: 'Customer', options, value: 'cus_2', onChange: () => {}, placeholder: 'Select customer...' },
	render: function R(args) {
		const [, updateArgs] = useArgs();
		return <SearchableSelect {...args} onChange={(next) => { updateArgs({ value: next }); args.onChange(next); }} />;
	},
};

export const Disabled: Story = {
	args: { label: 'Customer', options, value: 'cus_1', onChange: () => {}, disabled: true, placeholder: 'Select customer...' },
};

export const InteractionSelectOption: Story = {
	args: { label: 'Customer', options, value: null, onChange: () => {}, placeholder: 'Select customer...' },
	render: function R(args) {
		const [v, setV] = useState<string | null>(null);
		return <SearchableSelect {...args} value={v} onChange={(next) => { setV(next); args.onChange(next); }} />;
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
