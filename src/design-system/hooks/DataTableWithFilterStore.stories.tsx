import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { DataTable, type SortState } from '@/design-system/molecules/DataTable';
import { SearchBar } from '@/design-system/molecules/SearchBar';
import { SearchableSelect, type SelectOption } from '@/design-system/atoms/Select';
import { Button } from '@/design-system/atoms/Button';
import { useFilterStore } from '@/design-system/hooks/useFilterStore';

type Row = { id: string; customer: string; amount: string; status: string };

const allRows: Row[] = Array.from({ length: 48 }).map((_, i) => ({
	id: `inv_${i}`,
	customer: i % 2 === 0 ? `Acme ${i}` : `Globex ${i}`,
	amount: `$${(i + 1) * 12}.00`,
	status: i % 3 === 0 ? 'paid' : i % 3 === 1 ? 'open' : 'draft',
}));

const statusOptions: SelectOption[] = [
	{ value: 'all', label: 'All statuses' },
	{ value: 'paid', label: 'Paid' },
	{ value: 'open', label: 'Open' },
	{ value: 'draft', label: 'Draft' },
];

function FilteredInvoicesDemo() {
	const { filters, setFilter, resetFilters, fingerprint } = useFilterStore('invoices-story');
	const [sort, setSort] = useState<SortState | null>(null);

	const search = String(filters.search ?? '');
	const status = String(filters.status ?? 'all');

	const filtered = useMemo(() => {
		let r = allRows;
		if (search.trim()) {
			const q = search.toLowerCase();
			r = r.filter((row) => row.customer.toLowerCase().includes(q) || row.id.toLowerCase().includes(q));
		}
		if (status !== 'all') {
			r = r.filter((row) => row.status === status);
		}
		if (sort) {
			r = [...r].sort((a, b) => {
				const av = a[sort.columnId as keyof Row];
				const bv = b[sort.columnId as keyof Row];
				const cmp = String(av).localeCompare(String(bv));
				return sort.direction === 'asc' ? cmp : -cmp;
			});
		}
		return r;
	}, [search, status, sort]);

	const [page, setPage] = useState(1);
	const pageSize = 8;
	const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);

	return (
		<div className='max-w-3xl space-y-4'>
			<div className='flex flex-wrap items-end gap-4 rounded-[6px] border border-border bg-card p-4'>
				<div className='min-w-[200px] flex-1'>
					<SearchBar
						placeholder='Search customer or id...'
						debounceMs={250}
						onSearch={(q) => {
							setFilter('search', q);
							setPage(1);
						}}
					/>
				</div>
				<div className='w-56'>
					<SearchableSelect
						label='Status'
						options={statusOptions}
						value={status}
						onChange={(v) => {
							setFilter('status', v);
							setPage(1);
						}}
					/>
				</div>
				<Button variant='secondary' type='button' onClick={() => resetFilters()}>
					Reset
				</Button>
			</div>
			<p className='text-xs text-muted-foreground'>
				Session fingerprint in URL: <code className='rounded bg-muted px-1 py-0.5'>{fingerprint}</code> - filters persisted under{' '}
				<code className='rounded bg-muted px-1 py-0.5'>filters:invoices-story</code>
			</p>
			<DataTable<Row>
				columns={[
					{ id: 'customer', header: 'Customer', sortable: true, accessorKey: 'customer' },
					{ id: 'amount', header: 'Amount', sortable: true, accessorKey: 'amount' },
					{ id: 'status', header: 'Status', accessorKey: 'status' },
				]}
				rows={pageRows}
				getRowId={(r) => r.id}
				sort={sort}
				onSortChange={setSort}
				page={page}
				pageSize={pageSize}
				totalRows={filtered.length}
				onPageChange={setPage}
			/>
		</div>
	);
}

const meta = {
	title: 'Design System/Advanced/Filtered DataTable',
	component: FilteredInvoicesDemo,
	tags: ['autodocs'],
	args: {},
} satisfies Meta<typeof FilteredInvoicesDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSessionFilterStore: Story = {
	render: () => <FilteredInvoicesDemo />,
};
