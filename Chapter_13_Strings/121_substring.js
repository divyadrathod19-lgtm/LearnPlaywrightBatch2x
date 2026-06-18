let  str ="login_test_pass_001";
//slice (start,end)-negative indexes supported
console.log (str.slice(0,5));; 
console.log(str.slice(11));

let testNumber =str.slice(-3);
console.log(testNumber);


console.log(str.includes("pass"));

//subString(start,end)- not aloowd negative index 

console.log(str.substring(6,10));
str.at(0);