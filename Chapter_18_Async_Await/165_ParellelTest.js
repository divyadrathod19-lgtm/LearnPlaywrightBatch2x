//when step 2 depends on step 1 result you must run it sequentially 

//step 1- step 2

function apiCall(name){
    return new Promise(function (resolve){
        setTimeout (function (){
            resolve(name,"200 ok ")
        },2000);
    })
}
async function ParellelTest(){
    let [r1,r2,r3] =await Promise.all([
        apiCall("Auth Services"),
        apiCall("User account creation"),
        apiCall("support page API")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
ParellelTest();
