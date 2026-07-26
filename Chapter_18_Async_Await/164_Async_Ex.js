//basic Async and await 

async function getTestResult(){
    return "pass";
}
getTestResult.then (function(res){
    console.log(res);
})
getTestResult();

//-----------------------------------------------

import{test,expert}from '@playwright/test';

test('has titel',async({page}) => {
    await page.goto('https://paywright.dev/');//page.go to is the promise hence await is required 
    //expect a title "to contain" a substing.
    await expert(page).toHaveTitle(/Playwright/);//toHave also a promise hence await is required 
    
    let r = page.locator(); //locator ia not a Promise hence await not required 
});

