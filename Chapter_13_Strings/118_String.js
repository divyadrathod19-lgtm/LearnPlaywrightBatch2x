//single quotes

let a ='hi';
console.log (a);

//doble quotes

let b ="hello";
console.log(b);

//template literal 

let name1 ="Alice";
let msg =`hello,${name1}! 2 +2 =${2+2}`;
console.log(msg);

//mulibline string 
let report =`
test :login 
status pass
duraition 32oms
`;

console.log(report);


console.log(String(200));
//String(true) -> "true"
//string(null)->"null"
String([1,2]);// ->"[1,2]"


//string : data type 
//String : interface (which help you to creat a new string )