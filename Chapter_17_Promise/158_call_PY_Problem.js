function openBrowser(){
    return new Promise(function (resolve){
        //code to open browser
        resolve("open the Browser")
    })
}

// function openBrowser(callback){
//     setTimeout(function () {
//     console.log("opening the chrome Browser");
//         callback();
//     },1000);
// }

function goToLogin(){
    return new Promise (function (resolve){
        resolve("login page loaded")
    })
}
function enterCredencials(){
    return new Promise(function (resolve){
        resolve("Credencials entered")
    })
}
function clickLogin(){
    return new Promise(function (resolve){
        resolve("logged in sccessfully")
    });
}

openBrowser()
 .then(function(msg){
    console.log("Step 1", msg);
    return goToLogin();
}).then(function(msg){
    console.log("Step 2 ", msg);
    return enterCredencials();
}).then(function(msg){
    console.log("Step 3", msg);
    return clickLogin();
}).then(function(msg){
    console.log("Step 4", msg);
}).catch(function (error){
    console.log("error:", error)
}).finally(function (){
    console.log("done Execution")
});