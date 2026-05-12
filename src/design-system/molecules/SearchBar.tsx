import * as React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SearchBarProps = {
	/** Initial / controlled value */
	value?: string;
	/** Debounced callback in milliseconds */
	debounceMs?: number;
	onSearch: (query: string) => void;
	placeholder?: string;
	className?: string;
};

/**
 * Debounced search field with clear control for table and analytics toolbars.
 */
export function SearchBar({ value: controlled, debounceMs = 300, onSearch, placeholder = 'Search…', className }: SearchBarProps) {
	const [inner, setInner] = React.useState(controlled ?? '');
	React.useEffect(() => {
		if (controlled !== undefined) setInner(controlled);
	}, [controlled]);

	const debounced = useDebouncedCallback((q: string) => onSearch(q), debounceMs);

	const setValue = (q: string) => {
		setInner(q);
		debounced(q);
	};

	return (
		<div
			className={cn(
				'relative flex h-9 w-full max-w-sm items-center rounded-[6px] border border-input bg-background px-2 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
				className,
			)}
		>
			<Search className='size-4 shrink-0 text-muted-foreground' aria-hidden />
			<input
				className='h-full min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground'
				placeholder={placeholder}
				value={inner}
				onChange={(e) => setValue(e.target.value)}
				aria-label={placeholder}
			/>
			{inner ? (
				<button
					type='button'
					className='rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground'
					onClick={() => setValue('')}
					aria-label='Clear search'
				>
					<X className='size-4' />
				</button>
			) : null}
		</div>
	);
}
