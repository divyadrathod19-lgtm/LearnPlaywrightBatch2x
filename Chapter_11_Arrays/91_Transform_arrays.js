let scores =[45,82,91,60,73];

//map - transform every element, return a new arrays 
//a map will always retrun the same number of elements that you have 
//but based on the condition thier value will be chnaged.

let grades = scores.map(s =>s >70? "pass":"fail");
console.log (grades);
//output - [ 'fail', 'pass', 'pass', 'fail', 'pass' ]

//filter -keep the elements that pass a test 
let passing = scores.filter (s =>s >70);
console.log (passing);

//reduce , it will acumulate with the single value 

let total =scores.reduce ((a,b) => a + b, 0);
console.log (total);

//flat -flatens nested array- combile all seprate arry to one array 
let nested =[[1,2] ,[3,4],[5,6]];
console.log(nested.flat());