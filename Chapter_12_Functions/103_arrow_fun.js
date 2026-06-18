//arrow function (Es6) Es6 is the 6th version of java script 
//without arrow function 
const greet = function(name1){
    return "Hi"+ name1;
}

let r = greet("promod");
console.log(r);


//what arrow function say 
//with arrwo function 
const greet2 = name1 => "Hi" +name1;
let r2 = greet("Promod");
console.log(r2);

//if you waqnt to make normal function to arrow function 
//remove the keyword function , remove the keyword retrun type , remove the {  } and only use =>

const doubleIt =n =>n*2;
console.log(doubleIt(10));

const printIt =name =>console.log(name);
printIt("Dutta");

// if parametter is missing still we can use the arrow function 

//r ex.
function say(){
console.log("Hi");
}

//in arrow fun 
 const say1 =() => console.log("Hi");
 say1();

 const say2 =() =>'Hi';
say2();


 const greet =(name)=>{
    const msg ="Hi"+name;
    return msg;
 } 

 const greet = (name) => {
    const msg = "Hi " + name;
    return msg;
}

