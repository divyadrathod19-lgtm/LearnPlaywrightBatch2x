function getStatusCode (code){
    if (code>=200 && code <=300 )return "Success";
    if(code >=400 && code <=500)return "clinet error";
    if(code>=500)return "server error";
}
const r = getStatusCode(204);
console.log(r);



console.log("....")
function logTest(name){
    console.log(`running: ${name}`);
    // no return paramiter hence it will be undefined
}
let y =logTest("login");
console.log(y);

// normal function  it will give not give ref error it's valid to call first 
greet("Alice");

function greet (name){
    return `hello, ${name}`;
}

//expression function it will not allow to 
sayHi ("bob");
 const sayHi =function (name){
    return`Hi, ${name}`;
 }