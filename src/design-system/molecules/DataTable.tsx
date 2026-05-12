import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ArrowDown, ArrowUp, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Spinner } from '@/design-system/atoms/Spinner';

export type SortState = { columnId: string; direction: 'asc' | 'desc' };

export type ColumnDef<Row extends Record<string, unknown>> = {
	id: string;
	header: string;
	sortable?: boolean;
	/** Dot-path or key for default cell text */
	accessorKey?: keyof Row & string;
	renderCell?: (row: Row) => React.ReactNode;
};

export type DataTableProps<Row extends Record<string, unknown>> = {
	columns: ColumnDef<Row>[];
	rows: Row[];
	loading?: boolean;
	emptyMessage?: string;
	getRowId?: (row: Row, index: number) => string;
	sort?: SortState | null;
	onSortChange?: (next: SortState) => void;
	page?: number;
	pageSize?: number;
	totalRows?: number;
	onPageChange?: (page: number) => void;
	/** Enables viewport-only rendering for very large lists */
	virtual?: boolean;
	/** Estimated row height for virtualization (px) */
	virtualRowHeight?: number;
	/** Scrollport height when `virtual` is true */
	scrollHeight?: number;
	className?: string;
};

function defaultCell<Row extends Record<string, unknown>>(row: Row, col: ColumnDef<Row>) {
	if (col.renderCell) return col.renderCell(row);
	if (col.accessorKey) {
		const v = row[col.accessorKey];
		return v === null || v === undefined ? '' : String(v);
	}
	return '';
}

/**
 * Billing-style data grid with optional sorting, pagination, loading skeleton,
 * empty state, and `@tanstack/react-virtual` row windowing for large datasets.
 */
export function DataTable<Row extends Record<string, unknown>>({
	columns,
	rows,
	loading,
	emptyMessage = 'No rows to display',
	getRowId = (_row, i) => String(i),
	sort,
	onSortChange,
	page = 1,
	pageSize = 10,
	totalRows,
	onPageChange,
	virtual = false,
	virtualRowHeight = 40,
	scrollHeight = 400,
	className,
}: DataTableProps<Row>) {
	const parentRef = React.useRef<HTMLDivElement>(null);

	const virtualizer = useVirtualizer({
		count: virtual ? rows.length : 0,
		getScrollElement: () => parentRef.current,
		estimateSize: () => virtualRowHeight,
		overscan: 12,
		enabled: virtual,
	});

	const total = totalRows ?? rows.length;
	const totalPages = Math.max(1, Math.ceil(total / pageSize));

	const headerRow = (
		<tr className='border-b border-border bg-muted/40 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground'>
			{columns.map((col) => (
				<th key={col.id} className='px-3 py-2'>
					{col.sortable && onSortChange ? (
						<button
							type='button'
							className='inline-flex items-center gap-1 hover:text-foreground'
							onClick={() => {
								const isActive = sort?.columnId === col.id;
								const nextDir = isActive && sort?.direction === 'asc' ? 'desc' : 'asc';
								onSortChange({ columnId: col.id, direction: nextDir });
							}}
						>
							{col.header}
							{sort?.columnId === col.id ? (
								sort.direction === 'asc' ? (
									<ArrowUp className='size-3' />
								) : (
									<ArrowDown className='size-3' />
								)
							) : null}
						</button>
					) : (
						col.header
					)}
				</th>
			))}
		</tr>
	);

	const skeleton = (
		<tbody>
			{Array.from({ length: 5 }).map((_, i) => (
				<tr key={i} className='border-b border-border'>
					{columns.map((c) => (
						<td key={c.id} className='px-3 py-2'>
							<div className='h-4 animate-pulse rounded bg-muted' />
						</td>
					))}
				</tr>
			))}
		</tbody>
	);

	if (loading) {
		return (
			<div className={cn('w-full space-y-2', className)}>
				<div className='flex items-center gap-2 text-sm text-muted-foreground'>
					<Spinner size='sm' />
					Loading…
				</div>
				<div className='overflow-hidden rounded-[6px] border border-border'>
					<table className='w-full border-collapse text-sm'>
						<thead>{headerRow}</thead>
						{skeleton}
					</table>
				</div>
			</div>
		);
	}

	if (rows.length === 0) {
		return (
			<div className={cn('flex min-h-[200px] flex-col items-center justify-center rounded-[6px] border border-dashed border-border bg-muted/20 p-8 text-center text-sm text-muted-foreground', className)}>
				{emptyMessage}
			</div>
		);
	}

	if (virtual) {
		const items = virtualizer.getVirtualItems();
		const colTemplate = columns.map(() => 'minmax(0,1fr)').join(' ');
		return (
			<div className={cn('w-full space-y-2', className)}>
				<div className='overflow-hidden rounded-[6px] border border-border'>
					<div
						className='grid border-b border-border bg-muted/40 px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground'
						style={{ gridTemplateColumns: colTemplate }}
					>
						{columns.map((col) => (
							<div key={col.id} className='min-w-0'>
								{col.sortable && onSortChange ? (
									<button
										type='button'
										className='inline-flex items-center gap-1 hover:text-foreground'
										onClick={() => {
											const isActive = sort?.columnId === col.id;
											const nextDir = isActive && sort?.direction === 'asc' ? 'desc' : 'asc';
											onSortChange({ columnId: col.id, direction: nextDir });
										}}
									>
										{col.header}
										{sort?.columnId === col.id ? (
											sort.direction === 'asc' ? (
												<ArrowUp className='size-3' />
											) : (
												<ArrowDown className='size-3' />
											)
										) : null}
									</button>
								) : (
									col.header
								)}
							</div>
						))}
					</div>
					<div ref={parentRef} className='overflow-auto' style={{ height: scrollHeight }}>
						<div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
							{items.map((vi) => {
								const row = rows[vi.index];
								return (
									<div
										key={vi.key}
										ref={virtualizer.measureElement}
										data-index={vi.index}
										className='absolute left-0 top-0 grid w-full border-b border-border text-sm'
										style={{
											height: `${vi.size}px`,
											transform: `translateY(${vi.start}px)`,
											gridTemplateColumns: colTemplate,
										}}
									>
										{columns.map((col) => (
											<div key={col.id} className='min-w-0 truncate px-3 py-2'>
												{defaultCell(row, col)}
											</div>
										))}
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<p className='text-xs text-muted-foreground'>
					Virtual list: {rows.length.toLocaleString()} rows · overscan · rows use `measureElement` when heights differ from the estimate (
					{virtualRowHeight}px).
				</p>
			</div>
		);
	}

	return (
		<div className={cn('w-full space-y-3', className)}>
			<div className='overflow-auto rounded-[6px] border border-border'>
				<table className='w-full min-w-[480px] border-collapse text-sm'>
					<thead>{headerRow}</thead>
					<tbody>
						{rows.map((row, i) => (
							<tr key={getRowId(row, i)} className='border-b border-border last:border-0 hover:bg-muted/40'>
								{columns.map((col) => (
									<td key={col.id} className='px-3 py-2 align-middle'>
										{defaultCell(row, col)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{onPageChange ? (
				<div className='flex items-center justify-between text-sm text-muted-foreground'>
					<span>
						Page {page} of {totalPages}
					</span>
					<div className='flex gap-2'>
						<button
							type='button'
							className='inline-flex items-center rounded-[6px] border border-input px-2 py-1 hover:bg-accent disabled:opacity-40'
							disabled={page <= 1}
							onClick={() => onPageChange(page - 1)}
						>
							<ChevronsLeft className='size-4' /> Prev
						</button>
						<button
							type='button'
							className='inline-flex items-center rounded-[6px] border border-input px-2 py-1 hover:bg-accent disabled:opacity-40'
							disabled={page >= totalPages}
							onClick={() => onPageChange(page + 1)}
						>
							Next <ChevronsRight className='size-4' />
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
}
