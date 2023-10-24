const { test, expect, beforeAll, afterAll } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
// const ProductPage = require('../pages/ProductPage');
require('dotenv').config() // read variables from .env file
console.log(process.env) // print all environment variables

// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Positive Case: Valid login credentials
//   await page.goto('https://orangehrm-demo-7x.orangehrmlive.com/');
//   await page.fill('#txtUsername', 'Admin');
//   await page.fill('#txtPassword', 'admin123');
//   await page.click('#btnLogin');
//   await page.waitForSelector('#dashboard-quick-launch-panel-menu_holder');
//   const successMessage = await page.textContent('.message.success');
//   console.log('Positive Case:', successMessage);

//   // Negative Case: Invalid login credentials
//   await page.goto('https://orangehrm-demo-7x.orangehrmlive.com/');
//   await page.fill('#txtUsername', 'invalidUser');
//   await page.fill('#txtPassword', 'invalidPassword');
//   await page.click('#btnLogin');
//   await page.waitForSelector('.message.error');
//   const errorMessage = await page.textContent('.message.error');
//   console.log('Negative Case:', errorMessage);

//   await browser.close();
// })();


test('Login Test - Successful login with admin valid user', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await setTimeout(() => {
        
    }, 5000);
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await setTimeout(() => {
        
    }, 5000);
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect a title "to contain" a substring.
    await setTimeout(() => {
        
    }, 5000);
    //  await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD)
    await loginPage.login('Admin', 'admin123'); // Call the 'login' method of the LoginPage instance, passing the username and password.
    await setTimeout(() => {
        
    }, 5000);
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Expect the URL to be 'https://www.saucedemo.com/inventory.html'
    await setTimeout(() => {
        
    }, 5000);
    // const productPage = new ProductPage(page);
    // await expect(productPage.products_label).toHaveText('Products'); // Expect the 'products_label' locator to have text 'Products'.
});

test('Login Test - Unsuccessful login with admin invalid user', async ({ page }) => {
    const loginPage = new LoginPage(page); // Create an instance of the LoginPage class, passing the 'page' object.
    await setTimeout(() => {
        
    }, 5000);
    await loginPage.gotoLoginPage(); // Go to the login page using the 'gotoLoginPage' method.
    await setTimeout(() => {
        
    }, 5000);
    await expect(page).toHaveTitle(/OrangeHRM/); // Expect a title "to contain" a substring.
    await setTimeout(() => {
        
    }, 5000);
    //  await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD)
    await loginPage.login('Admin1', 'admin123'); // Call the 'login' method of the LoginPage instance, passing the username and password.
    await setTimeout(() => {
        
    }, 5000);
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Expect the URL to be 'https://www.saucedemo.com/inventory.html'
    await setTimeout(() => {
        
    }, 5000);
    // const productPage = new ProductPage(page);
    // await expect(productPage.products_label).toHaveText('Products'); // Expect the 'products_label' locator to have text 'Products'.
});