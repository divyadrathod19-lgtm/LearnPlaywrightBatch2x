//PYDOm : Pyramide of dom
//to remove the callback hell we are introduce the keyword Async and await 

function openBrowser(){
    return new Promise(function (resolve){
        //code to open browser
        resolve("open the Browser");
    });
}

function gotoLoginPage(){
    return new Promise (function (resolve){
        resolve("login page loaded");
    });
}
function enterCredencials(){
    return new Promise(function (resolve){
        resolve("Credencials entered");
    });
}
function clickLogin(){
    return new Promise(function (resolve){
        resolve("logged in sccessfully");
    });
}


// we will not use below 
// openBrowser()
//  .then(function(msg){
//     console.log("Step 1", msg);
//     return goToLogin();
// }).then(function(msg){
//     console.log("Step 2 ", msg);
//     return enterCredencials();
// }).then(function(msg){
//     console.log("Step 3", msg);
//     return clickLogin();
// }).then(function(msg){
//     console.log("Step 4", msg);
// }).catch(function (error){
//     console.log("error:", error)
// }).finally(function (){
    console.log("done Execution")
// });

//insted of above we will use below code to print 

async function runTheE2E(){
    let msg1 = await openBrowser();
        console.log("Step1:", msg1);

    let msg2 = await gotoLoginPage();
        console.log("Step 2:", msg2);
    
    let msg3  = await enterCredencials();
        console.log("step3:", msg3);

    let msg4 = await clickLogin();
        console.log("step4:", msg4);

}
runTheE2E();

