import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SidebarNavItem = {
	to: string;
	label: string;
	icon: LucideIcon;
};

export type SidebarNavProps = {
	items: SidebarNavItem[];
	/** Collapse to icon-only rail */
	defaultCollapsed?: boolean;
	className?: string;
};

/**
 * Application shell navigation with collapsible width and active-route styling.
 * Wrap with `MemoryRouter` or `BrowserRouter` in Storybook or the app root.
 */
export function SidebarNav({ items, defaultCollapsed = false, className }: SidebarNavProps) {
	const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

	return (
		<aside
			className={cn(
				'flex h-full min-h-[320px] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width]',
				collapsed ? 'w-[72px]' : 'w-56',
				className,
			)}
		>
			<div className='flex items-center justify-between border-b border-sidebar-border px-3 py-2'>
				{!collapsed ? <span className='text-sm font-semibold'>FlexPrice</span> : <span className='sr-only'>FlexPrice</span>}
				<button
					type='button'
					className='rounded-[6px] p-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
					onClick={() => setCollapsed((c) => !c)}
					aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
				>
					{collapsed ? <ChevronRight className='size-4' /> : <ChevronLeft className='size-4' />}
				</button>
			</div>
			<nav className='flex flex-1 flex-col gap-1 p-2'>
				{items.map(({ to, label, icon: Icon }) => (
					<NavLink
						key={to}
						to={to}
						className={({ isActive }) =>
							cn(
								'flex items-center gap-3 rounded-[6px] px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
								isActive && 'bg-sidebar-accent text-sidebar-primary',
							)
						}
						end={to === '/'}
					>
						<Icon className='size-4 shrink-0' aria-hidden />
						{collapsed ? <span className='sr-only'>{label}</span> : <span>{label}</span>}
					</NavLink>
				))}
			</nav>
		</aside>
	);
}
