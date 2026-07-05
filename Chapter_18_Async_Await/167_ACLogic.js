import{test,expert}from '@playwright/test';//test  are the libraby in playwright/test

test('has titel',async({page}) => {
    await page.goto('https://paywright.dev/');//page.go to is the promise hence await is required 
    //expect a title "to contain" a substing.
    await expert(page).toHaveTitle(/Playwright/);//exper is actual vs expected
});