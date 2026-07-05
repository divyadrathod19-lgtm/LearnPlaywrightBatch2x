//Q1.
let p =new  Promise (function(resolve,reject){
    resolve(42);
});
p.then (function(value)
{
    console.log("answer", value);
})

//Q2. -----------------------------------
 
let p =new  Promise (function(resolve,reject){
    reject("something broke");
});
p.catch(function(error)
{
    console.log("caught:",error);
})

//Q3. --------------------------------------
let p =  Promise.resolve(5);
p.then (function(value){
    return value *10 ;

}).then(function(value){
    console.log("result :",value)
})

//Q4. ----------------------------------------

Promise.resolve(1)
     .then(function (val){
        console.log(val);
        return val+1;
     })
      .then(function (val){
        console.log(val);
        return val+1;
     })
     .then(function (val){
        console.log(val);
     })

//Q5 --------------------------------------
 Promise.resolve("start")
    .then(function(val){
        console.log(val);
        throw new Error("Broke at step2");
        
    })
    .then(function () {
        console.log("this will not run ")
        
    })
    .catch(function (error){
        console.log("caught:",error.message)
    });

    //Q6 ------------------------------
Promise.reject("test Fail")
.then(function(data){
    console.log("Data:", data)
})
.catch(function(error){
    console.log("error:",error)
})
.finally(function(){
    console.log("test execution completed")
})

//Q7. -----------------------------
Promise.resolve("Quick win").then(function(msg){
    console.log(msg);
})
Promise.reject("quick loss").catch(function(error){
    console.log(error);
})

//Q8 ------------------------------------------------
 
let t1 =Promise.resolve("Login: Pass")
let t2 =Promise.resolve("Search: Pass")
let t3 =Promise.resolve("Logout: Pass")

Promise.all([t1,t2,t3]).then(function(result){
    console.log(result)
})

//Q9. ---------------------------------------

let t1 =Promise.resolve("pass");
let t2 =Promise.reject("fail");
let t3 =Promise.resolve("pass");

Promise.all([t1,t2,t3]) //.all mean if one of the case is fail entier scenario will mark as fail 
.then(function(r){console.log("All:",r);})
.catch(function(error){console.log("stoped:",error);})


//Q10. ------------------------------
Promise.allSettled([//allSettled mean it will run all the cases and give result for all cases
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
])
.then (function (results){
    results.forEach(function (r) {
        let val = r.status==="fulfilled"? r.value: r.reason ;
        console.log(r.status+ "="+ val);
       });
});

//Q11. -----------------------------------------
Promise.allSettled([//allSettled mean it will run all the cases and give result for all cases
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
])
.then (function (results){
    results.forEach(function (r) {
        console.log(r);
    });
});


//IQ :Callback vs Promise 