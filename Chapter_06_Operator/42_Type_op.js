// JavaScript type operators examples

// 1. typeof: returns the type of a value as a string
console.log(typeof 123);          // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);         // "boolean"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"  (arrays are objects)
console.log(typeof null);         // "object"  (this is a known JS quirk)
console.log(typeof undefined);    // "undefined"
console.log(typeof function() {}); // "function"

// 2. instanceof: checks whether an object is an instance of a constructor
const date = new Date();
console.log(date instanceof Date);      // true
console.log(date instanceof Object);    // true

const arr = [1, 2, 3];
console.log(arr instanceof Array);      // true
console.log(arr instanceof Object);     // true

// 3. Array.isArray: a reliable way to detect arrays
console.log(Array.isArray(arr));        // true
console.log(Array.isArray({}));         // false

// 4. typeof with variables
let count = 10;
console.log(typeof count);              // "number"

let value = null;
console.log(typeof value);              // "object"  (special case)

let notDefined;
console.log(typeof notDefined);         // "undefined"

// 5. Using typeof in conditional code
if (typeof count === "number") {
  console.log("count is a number");
}

if (typeof value === "object") {
  console.log("value is an object or null");
}
