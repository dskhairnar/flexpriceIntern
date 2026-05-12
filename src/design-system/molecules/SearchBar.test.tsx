import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
	afterEach(() => {
		cleanup();
	});
	it('renders search field', () => {
		render(<SearchBar onSearch={() => {}} placeholder='Find plans' />);
		expect(screen.getByRole('textbox', { name: /find plans/i })).toBeInTheDocument();
	});

	it('debounces onSearch', async () => {
		const user = userEvent.setup();
		const onSearch = vi.fn();
		render(<SearchBar onSearch={onSearch} debounceMs={40} />);
		const input = screen.getByRole('textbox', { name: /search…/i });
		await user.type(input, 'abc');
		await waitFor(() => expect(onSearch).toHaveBeenCalled(), { timeout: 2000 });
	});
});
