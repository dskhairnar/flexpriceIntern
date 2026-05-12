import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, CreditCard, FileText, Gauge, WalletCards } from 'lucide-react';
import { Badge } from '@/design-system/atoms/Badge';
import { Button } from '@/design-system/atoms/Button';
import { DataTable, type ColumnDef } from '@/design-system/molecules/DataTable';
import { InvoiceStatusBadge } from '@/design-system/molecules/InvoiceStatusBadge';
import { MetricCard } from '@/design-system/molecules/MetricCard';
import { UsageBar } from '@/design-system/molecules/UsageBar';

type InvoiceRow = {
	id: string;
	customer: string;
	plan: string;
	status: string;
	amount: string;
	usage: string;
};

const rows: InvoiceRow[] = [
	{ id: 'inv_1048', customer: 'Northstar AI', plan: 'Scale API', status: 'paid', amount: '$8,420.00', usage: '8.4M events' },
	{ id: 'inv_1047', customer: 'Atlas Cloud', plan: 'Enterprise', status: 'open', amount: '$12,980.00', usage: '14.2M events' },
	{ id: 'inv_1046', customer: 'Orbit Labs', plan: 'Growth', status: 'draft', amount: '$2,140.00', usage: '1.8M events' },
	{ id: 'inv_1045', customer: 'Kite Fintech', plan: 'Scale API', status: 'void', amount: '$0.00', usage: '320K events' },
];

const columns: ColumnDef<InvoiceRow>[] = [
	{ id: 'customer', header: 'Customer', accessorKey: 'customer', sortable: true },
	{ id: 'plan', header: 'Plan', accessorKey: 'plan' },
	{ id: 'status', header: 'Status', renderCell: (row) => <InvoiceStatusBadge status={row.status} /> },
	{ id: 'usage', header: 'Metered usage', accessorKey: 'usage' },
	{ id: 'amount', header: 'Amount', accessorKey: 'amount', sortable: true },
];

function BillingConsole() {
	return (
		<div className='min-h-[720px] bg-background text-foreground'>
			<header className='flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5'>
				<div>
					<div className='flex items-center gap-2 text-sm text-muted-foreground'>
						<Gauge className='size-4' aria-hidden />
						Usage-based billing command center
					</div>
					<h1 className='mt-2 text-2xl font-semibold tracking-tight'>May billing run</h1>
				</div>
				<div className='flex items-center gap-2'>
					<Badge variant='success'>Healthy sync</Badge>
					<Button variant='secondary'>
						Review invoices
						<ArrowRight className='size-4' aria-hidden />
					</Button>
				</div>
			</header>

			<section className='grid gap-3 py-5 md:grid-cols-4'>
				<MetricCard label='Recognized revenue' value='$128.4K' trend={12.8} />
				<MetricCard label='Billable events' value='24.7M' trend={8.1} />
				<MetricCard label='Active subscriptions' value='1,248' trend={3.4} />
				<MetricCard label='Invoice exceptions' value='7' trend={-18.2} />
			</section>

			<section className='grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]'>
				<div className='space-y-3'>
					<div className='flex items-center justify-between'>
						<div>
							<h2 className='text-base font-semibold'>Latest invoices</h2>
							<p className='text-sm text-muted-foreground'>High-value accounts with usage, plan, status, and amount in one scan.</p>
						</div>
						<Badge variant='outline'>4 of 1,248</Badge>
					</div>
					<DataTable<InvoiceRow> columns={columns} rows={rows} getRowId={(row) => row.id} page={1} pageSize={10} totalRows={rows.length} />
				</div>

				<aside className='space-y-5 border-l border-border pl-5'>
					<div className='space-y-3'>
						<div className='flex items-center gap-2 text-sm font-medium'>
							<WalletCards className='size-4 text-muted-foreground' aria-hidden />
							Credit exposure
						</div>
						<UsageBar label='Committed credits' used={684000} entitled={1000000} />
						<UsageBar label='Event entitlement' used={24700000} entitled={30000000} />
					</div>

					<div className='space-y-3'>
						<div className='flex items-center gap-2 text-sm font-medium'>
							<CreditCard className='size-4 text-muted-foreground' aria-hidden />
							Pricing mix
						</div>
						<div className='grid grid-cols-2 gap-2 text-sm'>
							<div className='rounded-[6px] border border-border p-3'>
								<div className='text-muted-foreground'>Tiered</div>
								<div className='mt-1 text-lg font-semibold'>62%</div>
							</div>
							<div className='rounded-[6px] border border-border p-3'>
								<div className='text-muted-foreground'>Flat fee</div>
								<div className='mt-1 text-lg font-semibold'>38%</div>
							</div>
						</div>
					</div>

					<div className='rounded-[6px] border border-border bg-muted/30 p-4 text-sm'>
						<div className='flex items-center gap-2 font-medium'>
							<FileText className='size-4 text-muted-foreground' aria-hidden />
							Reviewer note
						</div>
						<p className='mt-2 text-muted-foreground'>
							This story combines atoms, molecules, and organisms into the kind of billing review surface FlexPrice users would open every day.
						</p>
					</div>
				</aside>
			</section>
		</div>
	);
}

const meta = {
	title: 'Design System/Showcase/Billing Console',
	component: BillingConsole,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<div className='bg-background p-6'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof BillingConsole>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
