var a = 10; //Global scope
console.log(a); 

function test(){
    console.log ("hello world");
    var a = 20; //local scope
    console.log(a); //local scope variable


}
test();

//var : fipper,dual face, non trusted, can be redeclared and reassign, function scope, not recommended in framework development   