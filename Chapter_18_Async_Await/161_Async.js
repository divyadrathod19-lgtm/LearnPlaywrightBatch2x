async function testApi(){
    try{
    let result = await Promise.reject("503 reject");// untile thsi code run we will wait for await 
    } 
catch(error) {
    console.log("error:",error);//this code will run once promise will run 
}
finally {
    console.log("cleanup !")
}
}
testApi();


//rules 
//1. when any function return the promise we will always use await 
//2. if any code have some kind of promises we will use Async 
