// we arenot goin to use 

function outer(){
    let msg ="Hello";
    console.log("outer called");
    function inner(){
        console.log(msg);
    }
    return inner;
}
let fn_inner =outer();
fn_inner();

//inner function is directly not allowd 
//hence we will call outer in new function and we will calling new function 

