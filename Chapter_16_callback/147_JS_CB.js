console.log ("test 1: started");

setTimeout(function (){
    console.log("test 2: API response received");
},2000);

console.log("test 3: move to the next test");

//setTimeout is the Asynchronous method where it will say after some time of interval only runt his line 
//hence if we can see the output test 3 is run first and after 2s test 3 will run 

//we have 2 ways 1. synchronous 2. Asynchronous 
//synchronous : is line by line run the code top to bottom (UPI, IMPS, ForEach loop, map,filter)
//Asynchronous : is the "I'll do leter,you can carry on "