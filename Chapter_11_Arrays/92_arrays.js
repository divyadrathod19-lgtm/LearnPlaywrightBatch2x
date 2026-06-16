let fruits =["banana","apple","mango","cherry"]
fruits.sort();
console.log(fruits);

let number =[3,9,5];
number.sort();
console.log(number);


// by defualtd number will shorting in laxical shorting 
// if we need it in normal, accesnding or disanding we need to use arrow function  (a,b =>a-b)
//natural shorting  or laxical shorting  or laxicographic shorting 
let nums =[10,1,21,2];
nums.sort();
console.log(nums);
//output - [ 1, 10, 2, 21 ]

//if we need normal shorting or ascending order 
nums.sort ((a,b)=>a-b);
console.log(nums);

//if we need normal shorting or disandending order 
nums.sort ((a,b)=>b-a);
console.log(nums);