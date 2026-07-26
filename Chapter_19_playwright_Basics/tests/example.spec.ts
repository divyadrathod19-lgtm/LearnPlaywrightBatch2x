import { test, expect } from '@playwright/test';

// page fixture is automatically provided by Playwright.
// You can use  Playwright APIs directly in the test.

test('Verify that the title is TTA Cart', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await expect(page).toHaveTitle('TTACart - Login');
  await page.waitForTimeout(5000);
});