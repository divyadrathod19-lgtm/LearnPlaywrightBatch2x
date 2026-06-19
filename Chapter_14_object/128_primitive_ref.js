//primitive vs reference types 

//will create 2 hip mamorey 
//Changing one does not affect the other
//Creates a new independent copy
// number, string, boolean, null, undefined, symbol, bigint

// Primitive
let x = 5;
let y = x;
y = 10;
console.log(x); // 5
console.log(y); // 10


//Reference to value
//object, array, function
//Copies the pointer to the same data
//Changing one affects the other

// Reference
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob