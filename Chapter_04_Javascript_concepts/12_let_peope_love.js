//let -block scope
let a = 10; 

let retrycount = 0;
retrycount = retrycount+1  
retrycount = retrycount+1 
console.log ("retry attempts: " + retrycount); //reassigning is possible with let


//let retrycount = 5; //SyntaxError: Identifier 'retrycount' has already been declared redeclaration is not possible with let

//--------------------------------------------------------

let testStatus = "passed";
 if (testStatus === "passed"){
    let exectionTime = "200";
    console.log(" inside block",exectionTime); //ReferenceError: exectionTime is not defined
 }
 console.log("execution time: " + exectionTime); //ReferenceError: exectionTime is not defined

 //Block scope: variables declared with let are only accessible within the block they are defined outsie block if we can declare let it will give the error  in.
 //1. {} 
 //2. if (){}
 //3. function name (){}