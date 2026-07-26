//why pople not line callback 

//real QA scenarios :end to end login for app.vwo.com 

//openBrowser ()
//go to loginPage()
//enterCredencial()
//clickLogin()

//here we have dependency with each function without first next will not move 

function openBrowser(callback){
    setTimeout(function () {
    console.log("opening the chrome Browser");
        callback();
    },1000);
}

function gotoLoginPage(callback){
  setTimeout(function () {
    console.log("test2  : login page loaded ");
        callback();
    },1000);
}

function gotoLoginPage(callback){
  setTimeout(function () {
    console.log("test2  : login page loaded");
        callback();
    },2000);
}
function enterCredencial(callback){
  setTimeout(function () {
    console.log("test3  : Credencial entered");
        callback();
    },1000);
}
function clickLogin(callback){
  setTimeout(function () {
    console.log("test4  : Login button Clicked");
        callback();
    },1000);
}

// why people not like this bcz if we have multiple case than we have to 
// do this for that many times hence it'snot correct way 

openBrowser(function (){
    gotoLoginPage(function (){
        enterCredencial(function (){
            clickLogin(function (){
                console.log("test completed")
            })
        })
    })
})
//hence playwrite say only use one callback 
