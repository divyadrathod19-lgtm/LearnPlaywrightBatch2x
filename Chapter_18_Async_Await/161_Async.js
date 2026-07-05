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