//slicing & conmbining
//slice alway talking about index here it's says give the data from intex 1 to 3 
let arr =[1,2,3,4,5];
// Index [0,1,2,3,4,5];
//index [-4,-3,-2,-1]
console.log(arr.slice(1,3));// start ,end-1

console.log(arr.slice(2));//

//start from the -1 and till 2
console.log(arr.slice(-2));

console.log(arr.slice(0));

let arr1 =[10,20,30,40,50];
let s = arr1.slice(1,4);//20,30,40
console.log(arr1);
console.log(s);