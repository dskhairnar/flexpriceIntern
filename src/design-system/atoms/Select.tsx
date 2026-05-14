import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SelectOption = { value: string; label: string };

export type SearchableSelectProps = {
	options: SelectOption[];
	value: string | null;
	onChange: (value: string) => void;
	placeholder?: string;
	/** Accessible label */
	label?: string;
	disabled?: boolean;
	className?: string;
};

/**
 * Single-select list with inline search. Intended for customer, plan, and status pickers
 * where native `<select>` UX is too limited.
 */
export function SearchableSelect({ options, value, onChange, placeholder = 'Select...', label, disabled, className }: SearchableSelectProps) {
	const [open, setOpen] = React.useState(false);
	const [query, setQuery] = React.useState('');
	const [activeIndex, setActiveIndex] = React.useState(0);
	const rootRef = React.useRef<HTMLDivElement>(null);
	const listboxId = React.useId();

	const selected = options.find((o) => o.value === value) ?? null;
	const filtered = React.useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return options;
		return options.filter((o) => o.label.toLowerCase().includes(q));
	}, [options, query]);

	React.useEffect(() => {
		const selectedIndex = filtered.findIndex((o) => o.value === value);
		setActiveIndex(Math.max(0, selectedIndex));
	}, [filtered, value]);

	const chooseOption = (opt: SelectOption) => {
		onChange(opt.value);
		setOpen(false);
		setQuery('');
	};

	const onSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Escape') {
			event.preventDefault();
			setOpen(false);
			return;
		}

		if (filtered.length === 0) return;

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			setActiveIndex((i) => (i + 1) % filtered.length);
		}

		if (event.key === 'ArrowUp') {
			event.preventDefault();
			setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
		}

		if (event.key === 'Enter') {
			event.preventDefault();
			chooseOption(filtered[activeIndex]);
		}
	};

	React.useEffect(() => {
		if (!open) return;
		const onDoc = (e: MouseEvent) => {
			if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener('mousedown', onDoc);
		return () => document.removeEventListener('mousedown', onDoc);
	}, [open]);

	return (
		<div ref={rootRef} className={cn('relative w-full max-w-sm', className)}>
			{label ? <div className='mb-1 text-sm font-medium'>{label}</div> : null}
			<button
				type='button'
				disabled={disabled}
				className={cn(
					'flex h-9 w-full items-center justify-between rounded-[6px] border border-input bg-background px-3 text-left text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
					disabled && 'cursor-not-allowed opacity-50',
				)}
				aria-haspopup='listbox'
				aria-expanded={open}
				aria-controls={open ? listboxId : undefined}
				aria-label={label ? `${label}: ${selected?.label ?? placeholder}` : (selected?.label ?? placeholder)}
				onClick={() => setOpen((o) => !o)}
				onKeyDown={(event) => {
					if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						setOpen(true);
					}
					if (event.key === 'Escape') {
						setOpen(false);
					}
				}}
			>
				<span className={cn(!selected && 'text-muted-foreground')}>{selected?.label ?? placeholder}</span>
				<ChevronsUpDown className='size-4 shrink-0 opacity-50' aria-hidden />
			</button>
			{open ? (
				<div
					id={listboxId}
					role='listbox'
					aria-activedescendant={filtered[activeIndex] ? `${listboxId}-${filtered[activeIndex].value}` : undefined}
					className='absolute z-50 mt-1 w-full overflow-hidden rounded-[6px] border border-border bg-popover text-popover-foreground shadow-md'
				>
					<div className='border-b border-border p-2'>
						<input
							autoFocus
							className='h-8 w-full rounded-[4px] border border-input bg-background px-2 text-sm outline-none focus:ring-1 focus:ring-ring'
							placeholder='Search...'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onKeyDown={onSearchKeyDown}
							aria-label='Filter options'
						/>
					</div>
					<ul className='max-h-56 overflow-auto py-1'>
						{filtered.map((opt, index) => (
							<li key={opt.value}>
								<button
									id={`${listboxId}-${opt.value}`}
									type='button'
									role='option'
									aria-selected={opt.value === value}
									className={cn(
										'flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground',
										opt.value === value && 'bg-accent/60',
										index === activeIndex && 'bg-accent text-accent-foreground',
									)}
									onMouseEnter={() => setActiveIndex(index)}
									onClick={() => chooseOption(opt)}
								>
									<Check className={cn('size-4', opt.value === value ? 'opacity-100' : 'opacity-0')} aria-hidden />
									{opt.label}
								</button>
							</li>
						))}
						{filtered.length === 0 ? <li className='px-3 py-2 text-sm text-muted-foreground'>No matches</li> : null}
					</ul>
				</div>
			) : null}
		</div>
	);
}
