var a = 10; //Global scope
console.log(a); 

function test(){
    console.log ("hello world");
    var a = 20; //local scope
    console.log(a); //local scope variable
if (true){
    var a = 30; 
    console.log(a); //30    
}
 console.log("F ->,",a); // if we are chaning the value in function  that is allowd and take local scope with latest value est value

 }
  console.log("G ->,",a); //10  it will always take global scope value
  

test();

//var : fipper,dual face, non trusted, can be redeclared and reassign, function scope, not recommended in framework development   