import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { DesignTooltip } from './Tooltip';

const meta = {
	title: 'Design System/Atoms/Tooltip',
	component: DesignTooltip,
	tags: ['autodocs'],
	argTypes: {
		delayDuration: { control: { type: 'number', min: 0, max: 2000, step: 100 } },
		side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
	},
} satisfies Meta<typeof DesignTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: 'Usage is metered per successful API call in this environment.',
		delayDuration: 400,
		side: 'top',
		children: <Button variant='ghost'>Hover for details</Button>,
	},
};

export const Informational: Story = {
	args: {
		content: 'Tax is calculated from the customer billing address on file.',
		delayDuration: 600,
		children: <span className='cursor-default border-b border-dotted border-muted-foreground text-sm'>Tax basis</span>,
	},
};
