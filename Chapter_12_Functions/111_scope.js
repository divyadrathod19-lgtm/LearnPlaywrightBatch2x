//scope in functions

let env ="String";
function setupConfig(){
    let timeout =300;
    console.log(env);
    console.log(timeout);
}
setupConfig();
console.log(env);
console.log(timeout);
//time out is local variable which is assiged in class out of block it will not allow hence it's send eoror 

