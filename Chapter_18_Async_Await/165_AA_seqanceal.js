//when step 2 depends on step 1 result you must run it sequentially 

//step 1- step 2

function apiCall(name){
    return new Promise(function (resolve){
        setTimeout (function (){
            resolve(name,"200 ok ")
        },2000);
    })
}
async function seqTest(){
    console.log("starting of the test");
        let start =Date.now();

    let r1 =await apiCall("login")
    console.log(r1);

    
    let r2 =await apiCall("Dashbord")
    console.log(r2);

    
    let r3 =await apiCall("report")
    console.log(r3);
    

    console.log("Time:~"+ (Date.now() -start)+"ms");
}
seqTest();