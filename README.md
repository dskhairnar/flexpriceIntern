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

## Advanced Challenges

Challenge A, filter persistence, is implemented with Zustand in `src/design-system/hooks/useFilterStore.ts`.
Filters persist to `sessionStorage` by route key, while only a compact `fp` fingerprint is synced to the URL.

Challenge B, virtualized lists, is implemented in `src/design-system/molecules/DataTable.tsx` with `@tanstack/react-virtual`.
The DataTable story includes a 10,000-row virtualized example with row height estimation and dynamic measurement.

Challenge C, query caching, is implemented in `src/design-system/query/createQueryConfig.ts`.
The Storybook query provider applies the global default cache policy of 5 minutes stale time and 10 minutes garbage collection time.
Call sites can override timings through `createQueryConfig`.

## Tests

Vitest covers utility behavior and component rendering:

- Utility tests: currency formatting, invoice status mapping, tier pricing, filter fingerprinting, query config
- Component tests: Button and SearchBar
- Hook tests: `useFilterStore`
- Storybook play tests: Button, Input, SearchableSelect, SearchBar, DataTable, DateRangePicker, Tooltip, EmptyState, SidebarNav

## Deployment

Vercel uses `vercel.json`:

```json
{
	"installCommand": "npm install",
	"buildCommand": "npm run build-storybook",
	"outputDirectory": "storybook-static"
}
```
