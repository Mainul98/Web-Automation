
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//  code gen

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByPlaceholder('Username').press('CapsLock');
//   await page.getByPlaceholder('Username').fill('A');
//   await page.getByPlaceholder('Username').press('CapsLock');
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.locator('span').filter({ hasText: 'Vimal Arumugam' }).locator('i').click();
//   await page.getByRole('menuitem', { name: 'Logout' }).click();
// });
