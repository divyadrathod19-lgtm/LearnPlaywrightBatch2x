//checking array

//check if something is a Array 

let result =Array.isArray ([1,2,3]);
console.log(result);

let result1 = Array.isArray('a');
console.log(result1);

//every & some 
[80,90,85].every( s =>s >=70); // true if all parametter are matcing than 
// only it's true other wilse it's false
[80,60,85].every (s =>s >=70); //false

//playwight API
[200,201,203].every(statuscode =>statuscode >200);

//some AT least one must pass 
[80,60,85].every (s =>s < 70); //true
[80,90,85].every( s =>s < 70); //  false




