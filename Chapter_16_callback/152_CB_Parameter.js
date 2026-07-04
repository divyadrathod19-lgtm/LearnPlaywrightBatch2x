function greetTester (name ,callback){
    console.log("welcome," +name);
    callback();
}

greetTester("dev",function ()
{
    console.log("let's start testing ")
})

//callback with parameter 
 function runTest (testName,callback){
    let status ="pass";
    callback(testName,status);
 }

 runTest("login test", function(name,result){
    console.log(name + "->" + result);
 })

 //Sync callback -Foreach
 let bugs =["UI giltch","API timeout","wring redirect"];
 bugs.forEach(function (bug, i){
    console.log("bug # " + (i+1) + ":" +bug);

 });
 console.log("total bugs :" +bugs.length);