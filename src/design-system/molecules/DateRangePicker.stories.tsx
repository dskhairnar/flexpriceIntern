import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { DateRangePicker, type DateRangeValue } from './DateRangePicker';

const meta = {
	title: 'Design System/Molecules/DateRangePicker',
	component: DateRangePicker,
	tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const noopRange = { start: '', end: '' };

export const Default: Story = {
	args: { value: noopRange, onChange: () => {} },
	render: function R() {
		const [value, setValue] = useState<DateRangeValue>({ start: '2026-01-01', end: '2026-01-31' });
		return <DateRangePicker value={value} onChange={setValue} />;
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
	render: function R() {
		const [value, setValue] = useState<DateRangeValue>({ start: '', end: '' });
		return <DateRangePicker label='Usage window' value={value} onChange={setValue} />;
	},
};
