import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import { DEFAULT } from './createQueryConfig';

export function StoryQueryClientProvider({ children }: { children: ReactNode }) {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: DEFAULT,
				},
			}),
	);
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
