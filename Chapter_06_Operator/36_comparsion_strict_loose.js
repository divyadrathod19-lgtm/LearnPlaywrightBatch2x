//number == string 
console.log(42=="42"); //true
console.log(42==="42"); //false



// == compare only value
//=== compare value and data type

console.log(0==""); //true --? "" is considered as 0 in loose equality
console.log(0===""); //false

console.log(true==1); //true
console.log(true===1); //false

console.log(false==0); //true
console.log(false===0); //false
console.log(true==2); //false
console.log(true==="2"); //false
