import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { CreditCard, FileText, LayoutDashboard, Users } from 'lucide-react';
import { SidebarNav } from './SidebarNav';

const items = [
	{ to: '/', label: 'Dashboard', icon: LayoutDashboard },
	{ to: '/plans', label: 'Plans', icon: CreditCard },
	{ to: '/customers', label: 'Customers', icon: Users },
	{ to: '/invoices', label: 'Invoices', icon: FileText },
];

const meta = {
	title: 'Design System/Organisms/SidebarNav',
	component: SidebarNav,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<MemoryRouter initialEntries={['/plans']}>
				<div className='flex h-[400px] max-w-xl rounded-[6px] border border-border bg-background shadow-sm'>
					<Story />
					<main className='flex-1 p-4 text-sm text-muted-foreground'>Main content area</main>
				</div>
			</MemoryRouter>
		),
	],
	argTypes: {
		defaultCollapsed: { control: 'boolean' },
	},
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items,
		defaultCollapsed: false,
	},
};

export const Collapsed: Story = {
	args: {
		items,
		defaultCollapsed: true,
	},
};
