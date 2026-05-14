# FlexPrice Storybook Component Library

Storybook component library for the FlexPrice frontend intern take-home assignment.

- GitHub repo: https://github.com/dskhairnar/flexpriceIntern
- Hosted Storybook: https://flexprice-intern.vercel.app/

## Stack

- React 18
- TypeScript strict mode
- Storybook 8
- Vite
- Tailwind CSS
- Radix UI primitives
- Zustand
- TanStack Query v5
- TanStack React Virtual
- Vitest and Testing Library

## Scripts

```bash
npm install
npm run storybook
npm run build-storybook
npm run test:run
npm run typecheck
```

## Component Coverage

The Storybook is organized from smaller primitives to full sections:

- Atoms: Button, Badge, Input, SearchableSelect, Spinner, Tooltip
- Molecules: MetricCard, DataTable, InvoiceStatusBadge, UsageBar, DateRangePicker, SearchBar
- Organisms: SidebarNav, PricingTierTable, EmptyState
- Advanced: DataTable wired to `useFilterStore`, query caching presets
- Showcase: a composed FlexPrice billing console that brings the system together in one realistic screen

Storybook navigation is sorted as `Atoms -> Molecules -> Organisms -> Advanced -> Showcase`.

## My Thought Process

I approached this assignment as if I were contributing to a real SaaS design system, not just building isolated examples.
The focus is quality over component count: predictable APIs, production states, accessible defaults, realistic billing data, and performance choices that would still hold up for large customer accounts.

The most important surface is the DataTable because billing products live or die by dense, reliable data workflows.
That component carries sorting, pagination, loading skeletons, empty states, and optional virtualization so it can scale from a small invoice list to enterprise-sized datasets.

## Architecture Decisions

- Storybook-first development: every design-system component is documented as a usable state, not only as implementation code.
- Composition over prop explosion: components expose small APIs like `variant`, `size`, `loading`, `columns`, and `rows`, while callers own domain-specific rendering through slots such as `renderCell`.
- CVA for reusable variants: Button and Badge variants stay predictable and token-aligned instead of scattering one-off Tailwind strings across stories.
- Zustand over Context API for filters: filter state needs route-level persistence, imperative updates, and a small surface area without adding provider nesting.
- TanStack React Virtual for scale: the DataTable uses a proven virtualization primitive instead of hand-rolled scroll math.
- Query presets over ad hoc cache timings: `createQueryConfig` gives teams a shared vocabulary for realtime, default, and static data fetching behavior.

## Advanced Challenges

Challenge A, filter persistence, is implemented with Zustand in `src/design-system/hooks/useFilterStore.ts`.
Filters persist to `sessionStorage` by route key, while only a compact `fp` fingerprint is synced to the URL.

Challenge B, virtualized lists, is implemented in `src/design-system/molecules/DataTable.tsx` with `@tanstack/react-virtual`.
The DataTable story includes a 10,000-row virtualized example with row height estimation and dynamic measurement.

Challenge C, query caching, is implemented in `src/design-system/query/createQueryConfig.ts`.
The Storybook query provider applies the global default cache policy of 5 minutes stale time and 10 minutes garbage collection time.
Call sites can override timings through `createQueryConfig`.

## Production Considerations

- Accessibility support: semantic labels, visible focus states, `aria-busy`, `aria-invalid`, `aria-sort`, progress semantics, and keyboard support for interactive primitives.
- Virtualized rendering: large invoice lists render only the visible rows while preserving a table-like screen reader structure.
- Loading and empty states: DataTable stories cover slow responses, no data, permission-denied access, archived plans, billing exceptions, and high-volume enterprise data.
- Responsive layouts: stories use flexible wrapping, constrained widths, and horizontal table overflow for narrower screens.
- Error and exception handling: form fields expose validation errors, invoice status mapping handles unknown statuses, and billing exception stories document exceeded/archived cases.
- Design token consistency: shared Tailwind tokens keep radius, color, typography, focus rings, and destructive states consistent.
- Performance awareness: memoized data transforms, debounced search, session-backed filters, virtualized rows, and query cache presets limit unnecessary work.

## Accessibility

- Buttons preserve native keyboard behavior and expose loading state through `aria-busy`.
- Inputs connect labels and validation messages through `htmlFor`, `aria-invalid`, `aria-describedby`, and `role="alert"`.
- SearchableSelect supports keyboard opening, arrow navigation, Enter selection, Escape close, listbox semantics, and active option tracking.
- DataTable exposes sortable columns with `aria-sort`, labeled pagination controls, and table/grid roles for virtualized rendering.
- Decorative Lucide icons are marked `aria-hidden` so screen readers focus on the control labels.

## Performance Notes

- DataTable virtualization uses `@tanstack/react-virtual` with overscan and row measurement for large lists.
- SearchBar uses debounced callbacks so filtering does not fire on every keystroke.
- Filter persistence stores complete filter state in `sessionStorage` while keeping the URL compact with a stable fingerprint.
- Stories memoize generated rows and sorted views to avoid rebuilding large datasets during unrelated renders.
- Query cache presets document stale-time and garbage-collection choices for realtime, default, and static data.

## Tests

Vitest covers utility behavior and component rendering:

- Utility tests: currency formatting, invoice status mapping, tier pricing, filter fingerprinting, query config
- Component tests: Button and SearchBar
- Hook tests: `useFilterStore`
- Storybook play tests: Button, Input, SearchableSelect, SearchBar, DataTable, DateRangePicker, Tooltip, EmptyState, SidebarNav

## Testing Strategy

Automated coverage focuses on the highest-risk behavior:

- Pure utilities are unit tested because pricing, status mapping, and cache configs should be deterministic.
- Component tests cover interactive primitives such as Button and debounced SearchBar behavior.
- Hook tests verify filter persistence and stable snapshots.
- Storybook play functions exercise real user interactions inside documented stories, including sorting, pagination, typing, selecting, and clearing.

## Tradeoffs

- The component set is intentionally focused instead of broad; the goal is to make the billing system pieces feel production-ready.
- DataTable keeps the API framework-agnostic rather than adopting the full TanStack Table surface, which keeps stories readable for this assignment.
- Storybook interaction tests are documented in stories, while Vitest remains the primary local command in `npm run test:run`.

## Future Improvements

- Add `@storybook/test-runner` in CI so all story play functions run automatically against the built Storybook.
- Add visual regression snapshots for dense table states and responsive layouts.
- Add an ErrorBoundary story around the showcase surface.
- Extract more shared typography and spacing tokens as the design system grows.

## Deployment

Vercel uses `vercel.json`:

```json
{
	"installCommand": "npm install",
	"buildCommand": "npm run build-storybook",
	"outputDirectory": "storybook-static"
}
```
