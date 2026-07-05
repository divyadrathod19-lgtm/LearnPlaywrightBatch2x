let testRun = new Promise (function (resolve, reject){
    let apiCall =true;
    if(apiCall){
    resolve({"status":"done"});
    }else
    reject ("assertion Failed");
});

testRun.then(function (data){
    console.log(data);
}).catch(function (error){
    console.log(error);
}).finally(function (){
    //this code will run always executed anyhow 
    console.log(" I will be executed any how!")
})