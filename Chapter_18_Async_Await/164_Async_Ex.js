//basic Async and await 

async function getTestResult(){
    return "pass";
}
getTestResult.then(function(res){
    console.log(res);
})
getTestResult();