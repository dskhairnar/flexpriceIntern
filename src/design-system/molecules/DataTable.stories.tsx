import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { DataTable, type SortState } from './DataTable';

type Row = { id: string; customer: string; amount: string; status: string };

const baseRows: Row[] = [
	{ id: 'inv_1', customer: 'Northwind', amount: '$120.00', status: 'paid' },
	{ id: 'inv_2', customer: 'Contoso', amount: '$89.50', status: 'open' },
	{ id: 'inv_3', customer: 'Fabrikam', amount: '$240.00', status: 'draft' },
];

const meta: Meta<typeof DataTable<Row>> = {
	title: 'Design System/Molecules/DataTable',
	component: DataTable,
	tags: ['autodocs'],
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
				columns={[
					{ id: 'customer', header: 'Customer', sortable: true, accessorKey: 'customer' },
					{ id: 'amount', header: 'Amount', sortable: true, accessorKey: 'amount' },
					{ id: 'status', header: 'Status', accessorKey: 'status' },
				]}
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
};

export const Loading: Story = {
	args: {
		columns: [
			{ id: 'customer', header: 'Customer', accessorKey: 'customer' },
			{ id: 'amount', header: 'Amount', accessorKey: 'amount' },
		],
		rows: [],
		loading: true,
	},
};

export const Empty: Story = {
	args: {
		columns: [
			{ id: 'customer', header: 'Customer', accessorKey: 'customer' },
			{ id: 'amount', header: 'Amount', accessorKey: 'amount' },
		],
		rows: [],
		emptyMessage: 'No invoices for this filter.',
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
				columns={[
					{ id: 'customer', header: 'Customer', accessorKey: 'customer' },
					{ id: 'amount', header: 'Amount', accessorKey: 'amount' },
					{ id: 'status', header: 'Status', accessorKey: 'status' },
				]}
				rows={slice}
				getRowId={(r) => r.id}
				page={page}
				pageSize={pageSize}
				totalRows={all.length}
				onPageChange={setPage}
			/>
		);
	},
};

export const VirtualizedTenThousandRows: Story = {
	args: {},
	render: function Virtual() {
		const rows = useMemo(
			() =>
				Array.from({ length: 10_000 }).map(
					(_, i): Row => ({
						id: `row_${i}`,
						customer: `Customer ${i + 1}`,
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
				columns={[
					{ id: 'customer', header: 'Customer', sortable: true, accessorKey: 'customer' },
					{ id: 'amount', header: 'Amount', sortable: true, accessorKey: 'amount' },
					{ id: 'status', header: 'Status', accessorKey: 'status' },
				]}
				rows={rows}
				getRowId={(r) => r.id}
				sort={sort}
				onSortChange={setSort}
			/>
		);
	},
};
