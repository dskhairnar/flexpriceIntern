import type { Meta, StoryObj } from '@storybook/react';
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
};

export const CustomLabel: Story = {
	args: { value: noopRange, onChange: () => {}, label: 'Usage window' },
	render: function R() {
		const [value, setValue] = useState<DateRangeValue>({ start: '', end: '' });
		return <DateRangePicker label='Usage window' value={value} onChange={setValue} />;
	},
};
