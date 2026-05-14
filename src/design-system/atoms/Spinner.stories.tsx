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
	args: {
		size: 'md',
		label: 'Loading',
	},
};

export const Sizes: Story = {
	args: {
		size: 'md',
		label: 'Loading invoice data',
	},
	parameters: {
		docs: {
			description: {
				story: 'Use the size and label controls to preview the spinner treatment used in loading states.',
			},
		},
	},
	render: ({ size, label }) => (
		<div className='flex flex-wrap items-center gap-8'>
			<div className='flex items-center gap-3 rounded-[6px] border border-border p-3'>
				<Spinner size={size} label={label} />
				<span className='text-sm text-muted-foreground'>Controlled preview</span>
			</div>
			<div className='flex items-center gap-4 border-l border-border pl-6'>
				<Spinner size='sm' label='Small loading indicator' />
				<Spinner size='md' label='Medium loading indicator' />
				<Spinner size='lg' label='Large loading indicator' />
			</div>
		</div>
	),
};
