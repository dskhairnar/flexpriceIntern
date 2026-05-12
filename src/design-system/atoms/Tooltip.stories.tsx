import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Button } from './Button';
import { DesignTooltip } from './Tooltip';

const meta = {
	title: 'Design System/Atoms/Tooltip',
	component: DesignTooltip,
	tags: ['autodocs'],
	argTypes: {
		delayDuration: { control: { type: 'number', min: 0, max: 2000, step: 100 } },
		side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
		children: { table: { disable: true } },
	},
} satisfies Meta<typeof DesignTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Hover for details',
		content: 'Usage is metered per successful API call in this environment.',
		delayDuration: 400,
		side: 'top',
	},
	render: (args) => (
		<DesignTooltip {...args}>
			<Button variant='ghost'>Hover for details</Button>
		</DesignTooltip>
	),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Shows tooltip content on hover', async () => {
			await userEvent.hover(canvas.getByRole('button', { name: /hover for details/i }));
			await expect(await within(document.body).findByText(/usage is metered/i)).toBeVisible();
		});
	},
};

export const Informational: Story = {
	args: {
		children: 'Tax basis',
		content: 'Tax is calculated from the customer billing address on file.',
		delayDuration: 600,
	},
	render: (args) => (
		<DesignTooltip {...args}>
			<span className='cursor-default border-b border-dotted border-muted-foreground text-sm'>Tax basis</span>
		</DesignTooltip>
	),
};
