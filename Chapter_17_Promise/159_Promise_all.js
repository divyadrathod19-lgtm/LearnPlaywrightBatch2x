// we are going to use in Playwrite 
let checkAuth =Promise.resolve("Auth OK");
let checkDB =Promise.resolve("DB ok");
let checkCache =Promise.resolve("Caches ok");

Promise.all ([checkAuth,checkDB,checkCache]).then(function (result){
    console.log ("all the checkes are fine ")
})

Promise.all([
    Promise.resolve ("ok"),
    Promise.reject("DB Down"),
    Promise.resolve("ok")
]).then(function (r){
    console.log(r);
}).catch(function (error){
    console.log("failed:",error)
})


Promise.allSettled([
    Promise.resolve("test A Passed!"),
    Promise.reject("test B failed"),
    Promise.resolve("test c Passed")
]).then(function (results){
    results.forEach(function (r,i){
        console.log("test" + (i+1)+ ":",r.status,"-",r.value || r.reason);
    });
});

//this is like a test report 
//you want result for all test
//not just stop at the first failuer 