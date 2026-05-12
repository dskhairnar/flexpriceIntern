import * as React from 'react';
import { cn } from '@/lib/utils';

export type DesignInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> & {
	/** Visible label above the field */
	label?: string;
	/** Validation or helper error shown below the field */
	error?: string;
	/** Prepended adornment (e.g. currency symbol) */
	prefix?: React.ReactNode;
	size?: 'sm' | 'md' | 'lg';
};

const heights = { sm: 'h-8 text-xs', md: 'h-9 text-sm', lg: 'h-10 text-base' };

/**
 * Text and number field with optional label, error state, and prefix slot
 * (for currency or units) aligned with FlexPrice billing forms.
 */
export const Input = React.forwardRef<HTMLInputElement, DesignInputProps>(
	({ className, label, error, id, prefix, size = 'md', disabled, ...props }, ref) => {
		const inputId = id ?? React.useId();
		return (
			<div className={cn('flex w-full max-w-md flex-col gap-1')}>
				{label ? (
					<label htmlFor={inputId} className={cn('text-sm font-medium', disabled && 'opacity-50')}>
						{label}
					</label>
				) : null}
				<div
					className={cn(
						'flex w-full items-center rounded-[6px] border bg-background px-3 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
						heights[size],
						error ? 'border-destructive' : 'border-input',
						disabled && 'cursor-not-allowed opacity-50',
					)}
				>
					{prefix ? <span className='mr-2 shrink-0 text-muted-foreground'>{prefix}</span> : null}
					<input
						ref={ref}
						id={inputId}
						disabled={disabled}
						className={cn('min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground', className)}
						aria-invalid={error ? true : undefined}
						aria-describedby={error ? `${inputId}-error` : undefined}
						{...props}
					/>
				</div>
				{error ? (
					<p id={`${inputId}-error`} className='text-sm text-destructive' role='alert'>
						{error}
					</p>
				) : null}
			</div>
		);
	},
);
Input.displayName = 'Input';
