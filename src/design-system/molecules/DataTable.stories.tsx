import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useMemo, useState } from 'react';
import { DataTable, type ColumnDef, type SortState } from './DataTable';

type Row = { id: string; customer: string; amount: string; status: string };

const baseRows: Row[] = [
	{ id: 'inv_1', customer: 'Northwind', amount: '$120.00', status: 'paid' },
	{ id: 'inv_2', customer: 'Contoso', amount: '$89.50', status: 'open' },
	{ id: 'inv_3', customer: 'Fabrikam', amount: '$240.00', status: 'draft' },
];

const invoiceColumns: ColumnDef<Row>[] = [
	{ id: 'customer', header: 'Customer', sortable: true, accessorKey: 'customer' },
	{ id: 'amount', header: 'Amount', sortable: true, accessorKey: 'amount' },
	{ id: 'status', header: 'Status', accessorKey: 'status' },
];

const meta: Meta<typeof DataTable<Row>> = {
	title: 'Design System/Molecules/DataTable',
	component: DataTable,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Production billing table with keyboard-sortable headers, loading and empty states, pagination, and optional virtualization for high-volume accounts.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: function Table() {
		const [sort, setSort] = useState<SortState | null>(null);
		const sorted = useMemo(() => {
			if (!sort) return baseRows;
			const copy = [...baseRows];
			copy.sort((a, b) => {
				const av = a[sort.columnId as keyof Row];
				const bv = b[sort.columnId as keyof Row];
				const cmp = String(av).localeCompare(String(bv));
				return sort.direction === 'asc' ? cmp : -cmp;
			});
			return copy;
		}, [sort]);
		return (
			<DataTable<Row>
				columns={invoiceColumns}
				rows={sorted}
				getRowId={(r) => r.id}
				sort={sort}
				onSortChange={setSort}
				page={1}
				pageSize={10}
				totalRows={sorted.length}
			/>
		);
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Sorts when a sortable column header is clicked', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /customer/i }));
			const rows = canvas.getAllByRole('row');
			await expect(within(rows[1]).getByText('Contoso')).toBeVisible();
		});
	},
};

export const SlowApiResponse: Story = {
	args: {
		columns: invoiceColumns,
		rows: [],
		loading: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Slow API response state: keeps the table shape visible while invoice data is pending.',
			},
		},
	},
};

export const Empty: Story = {
	args: {
		columns: invoiceColumns,
		rows: [],
		emptyMessage: 'No invoices for this filter.',
	},
};

export const NoPermissions: Story = {
	args: {
		columns: invoiceColumns,
		rows: [],
		emptyMessage: 'You do not have permission to view invoices for this workspace.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Permission-denied empty state for restricted billing roles.',
			},
		},
	},
};

export const ArchivedPlan: Story = {
	args: {
		columns: invoiceColumns,
		rows: [
			{ id: 'inv_arch_1', customer: 'Atlas Cloud', amount: '$12,980.00', status: 'archived plan' },
			{ id: 'inv_arch_2', customer: 'Northstar AI', amount: '$8,420.00', status: 'final invoice' },
		],
		getRowId: (r: Row) => r.id,
	},
	parameters: {
		docs: {
			description: {
				story: 'Archived subscription plans still need readable invoice history and predictable table behavior.',
			},
		},
	},
};

export const BillingExceeded: Story = {
	args: {
		columns: invoiceColumns,
		rows: [
			{ id: 'inv_over_1', customer: 'Kite Fintech', amount: '$18,400.00', status: 'usage exceeded' },
			{ id: 'inv_over_2', customer: 'Orbit Labs', amount: '$7,920.00', status: 'credit limit exceeded' },
		],
		getRowId: (r: Row) => r.id,
	},
	parameters: {
		docs: {
			description: {
				story: 'Billing exception state for accounts that exceeded entitlement or credit limits.',
			},
		},
	},
};

export const Pagination: Story = {
	args: {},
	render: function Paginated() {
		const all = useMemo(
			() =>
				Array.from({ length: 37 }).map(
					(_, i): Row => ({
						id: `inv_${i}`,
						customer: `Customer ${i + 1}`,
						amount: `$${(i + 1) * 10}.00`,
						status: i % 2 === 0 ? 'paid' : 'open',
					}),
				),
			[],
		);
		const [page, setPage] = useState(1);
		const pageSize = 10;
		const slice = all.slice((page - 1) * pageSize, page * pageSize);
		return (
			<DataTable<Row>
				columns={invoiceColumns}
				rows={slice}
				getRowId={(r) => r.id}
				page={page}
				pageSize={pageSize}
				totalRows={all.length}
				onPageChange={setPage}
			/>
		);
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Moves to the next page', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /next/i }));
			await expect(canvas.getByText('Customer 11')).toBeVisible();
		});
	},
};

export const EnterpriseCustomerWithTenThousandInvoices: Story = {
	args: {},
	render: function Virtual() {
		const rows = useMemo(
			() =>
				Array.from({ length: 10_000 }).map(
					(_, i): Row => ({
						id: `row_${i}`,
						customer: `Enterprise customer ${i + 1}`,
						amount: `$${((i % 50) + 1) * 25}.00`,
						status: i % 3 === 0 ? 'paid' : 'open',
					}),
				),
			[],
		);
		const [sort, setSort] = useState<SortState | null>(null);
		return (
			<DataTable<Row>
				virtual
				virtualRowHeight={40}
				scrollHeight={420}
				columns={invoiceColumns}
				rows={rows}
				getRowId={(r) => r.id}
				sort={sort}
				onSortChange={setSort}
			/>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'High-volume SaaS account with 10,000 invoices rendered through TanStack virtualization.',
			},
		},
	},
};
