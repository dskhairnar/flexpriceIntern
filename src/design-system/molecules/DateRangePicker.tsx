import { cn } from '@/lib/utils';

export type DateRangeValue = { start: string; end: string };

export type DateRangePickerProps = {
	value: DateRangeValue;
	onChange: (next: DateRangeValue) => void;
	label?: string;
	className?: string;
};

/**
 * Lightweight analytics range control using native date inputs (no external date lib).
 */
export function DateRangePicker({ value, onChange, label = 'Date range', className }: DateRangePickerProps) {
	return (
		<fieldset className={cn('flex flex-wrap items-end gap-3', className)}>
			<legend className='mb-2 w-full text-sm font-medium'>{label}</legend>
			<label className='flex flex-col gap-1 text-xs text-muted-foreground'>
				Start
				<input
					type='date'
					className='h-9 rounded-[6px] border border-input bg-background px-2 text-sm'
					value={value.start}
					onChange={(e) => onChange({ ...value, start: e.target.value })}
				/>
			</label>
			<label className='flex flex-col gap-1 text-xs text-muted-foreground'>
				End
				<input
					type='date'
					className='h-9 rounded-[6px] border border-input bg-background px-2 text-sm'
					value={value.end}
					onChange={(e) => onChange({ ...value, end: e.target.value })}
				/>
			</label>
		</fieldset>
	);
}
