let a = 10; //Global scope
console.log(a); 

function test(){
    console.log ("hello world");
    let a = 20; //local scope
    console.log(a); //local scope variable
if (true){
    let a = 30; 
    console.log(a); //30    
}
 console.log("F ->,",a); // if local block is closed than it will not assiged the new value to 
 //     the console.log("F ->,",a); // if local block is closed than it will not assiged the new value to the variable and take local scope with latest value est value

 }
  console.log("G ->,",a); //10  it will always take global scope value and global scope not chnage it's  constant value 

  

test();

//var : fipper,dual face, non trusted, can be redeclared and reassign, function scope, not recommended in framework development   