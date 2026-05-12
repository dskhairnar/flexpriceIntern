import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
	title: 'Design System/Atoms/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		label: { control: 'text' },
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Sizes: Story = {
	render: () => (
		<div className='flex items-center gap-8'>
			<Spinner size='sm' />
			<Spinner size='md' />
			<Spinner size='lg' />
		</div>
	),
};
