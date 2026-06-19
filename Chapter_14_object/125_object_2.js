let student1={name:"divu",age :65};
let student2 ={name:"amit"};
let student3 ={name:"pemod",age:23,phone:9988776654};


//copy by reference 
//here 1 have status as pass abs assiged to B do B value is also pass 
//but when we change the B value to fail automatically a valu eis also change 
// henec it's called as copy by reference 
//in hip area both are pointed to same hip 

let a= {status:"pass"};
console.log(a.status);
console.log(a["status"]);

// let a1 ={status:'pass'};
// console.log(a1.status);
let b =a;
b.status ="fail"
console.log(b.status);
console.log (a.status);

if (a===b){
    console.log("true");
}else{
     console.log(false);
}