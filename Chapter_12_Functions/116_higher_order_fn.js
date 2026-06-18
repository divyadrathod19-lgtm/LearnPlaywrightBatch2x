//higher order function 
//a function that takes a function as arugument or ertrun a function 
function runWithLogging(testFn, testName){
   const result = testFn();
   console.log(`${testName}: ${result}`);
   return result;
}

function loginTest(){
   return "pass";
}

function loginTestFailed(){
   return "fail";
}

runWithLogging(loginTest, "login test");
runWithLogging(loginTestFailed, "dashboard failed test");