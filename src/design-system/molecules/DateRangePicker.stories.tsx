import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useEffect, useState } from 'react';
import { DateRangePicker, type DateRangeValue } from './DateRangePicker';

const meta = {
	title: 'Design System/Molecules/DateRangePicker',
	component: DateRangePicker,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		onChange: { table: { disable: true } },
	},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const noopRange = { start: '', end: '' };

export const Default: Story = {
	args: { label: 'Date range', value: { start: '2026-01-01', end: '2026-01-31' }, onChange: () => {} },
	render: function R(args) {
		const [value, setValue] = useState<DateRangeValue>(args.value);
		useEffect(() => setValue(args.value), [args.value]);
		return <DateRangePicker {...args} value={value} onChange={(next) => { setValue(next); args.onChange(next); }} />;
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Updates native date inputs', async () => {
			const start = canvas.getByLabelText(/start/i);
			await userEvent.clear(start);
			await userEvent.type(start, '2026-02-01');
			await expect(start).toHaveValue('2026-02-01');
		});
	},
};

export const CustomLabel: Story = {
	args: { value: noopRange, onChange: () => {}, label: 'Usage window' },
	render: function R(args) {
		const [value, setValue] = useState<DateRangeValue>(args.value);
		useEffect(() => setValue(args.value), [args.value]);
		return <DateRangePicker {...args} value={value} onChange={(next) => { setValue(next); args.onChange(next); }} />;
	},
};
