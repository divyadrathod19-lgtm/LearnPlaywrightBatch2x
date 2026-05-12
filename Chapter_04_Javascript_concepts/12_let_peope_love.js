//let -block scope
let a = 10; 

let retrycount = 0;
retrycount = retrycount+1  
retrycount = retrycount+1 
console.log ("retry attempts: " + retrycount); //reassigning is possible with let


//let retrycount = 5; //SyntaxError: Identifier 'retrycount' has already been declared redeclaration is not possible with let

let testStatus = "passed";
 if (testStatus === "passed"){
    let exectionTime = "200";
    console.log(" inside block",exectionTime); //ReferenceError: exectionTime is not defined
 }
 console.log("execution time: " + exectionTime); //ReferenceError: exectionTime is not defined