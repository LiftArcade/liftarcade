import { expect, test } from '@playwright/test';

test('Successfully loads the 404 error page', async ({ page }) => {
	await page.goto('/404');
	await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
});
