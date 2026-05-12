/**
 * Formats a numeric amount as a currency string (USD-style by default).
 */
export function formatCurrency(amount: number, currency = 'USD', locale = 'en-US'): string {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(amount);
}
