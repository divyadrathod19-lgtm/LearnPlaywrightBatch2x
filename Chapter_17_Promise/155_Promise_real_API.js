let apiCall =new Promise(function (resolve,reject){
    

    resolve({
        status :200 , body :"user data"
    })
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);
});

// .then() runs Only when the promise resolves succcessfully 
//then it alternat name of  resolve 

