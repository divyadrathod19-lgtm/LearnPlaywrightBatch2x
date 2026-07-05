//Q1-----

async function sayHello(){
    return "Hello, QA";
}
sayHello().then(function (msg){
    console.log(msg);
})

//Q2 ------------------------------------

async function getStatus(){
    let status =await Promise.resolve(200);
    console.log("status code :",status)
}
getStatus();

//Q3. -----------------

async function testFlow(){
    let step1 = await Promise.resolve("open Browser");
    console.log(step1);
     
    let step2 = await Promise.resolve("Click on login");
    console.log(step2);
     
    let step3 = await Promise.resolve("verify dashbord");
    console.log(step3);
}
testFlow();