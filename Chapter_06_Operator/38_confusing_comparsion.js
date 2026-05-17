// Confusing Comparison: == vs ===

console.log("=== LOOSE EQUALITY (==) - Type Coercion ===");

// String vs Number
console.log("1" == 1); // true (string "1" coerced to number 1)
console.log("0" == 0); // true
console.log("" == 0); // true (empty string coerced to 0)
console.log("" == false); // true (both coerce to falsy)

console.log("---");

// Boolean coercion
console.log(true == 1); // true (true coerced to 1)
console.log(false == 0); // true (false coerced to 0)
console.log(true == "1"); // true (both coerce to 1)
console.log(false == "0"); // true (both coerce to 0)

console.log("---");

// Null and Undefined
console.log(null == undefined); // true (special rule)
console.log(null == 0); // false (null doesn't coerce to 0)
console.log(undefined == 0); // false (undefined doesn't coerce to 0)
console.log(null == null); // true
console.log(undefined == undefined); // true

console.log("---");

// Array and Object coercion
console.log([1] == 1); // true (array coerced to "1" then to 1)
console.log([1] == "1"); // true
console.log([] == 0); // true (empty array coerced to 0)
console.log([] == false); // true
console.log([""] == 0); // true
console.log([""] == false); // true

console.log("---");

console.log("=== STRICT EQUALITY (===) - NO Type Coercion ===");

// Strict comparison - types must match
console.log("1" === 1); // false (different types)
console.log("0" === 0); // false
console.log("" === 0); // false
console.log("" === false); // false

console.log("---");

// Boolean strict
console.log(true === 1); // false (boolean is not a number)
console.log(false === 0); // false
console.log(true === "1"); // false

console.log("---");

// Null and Undefined strict
console.log(null === undefined); // false (different types)
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === 0); // false
console.log(undefined === 0); // false

console.log("---");

// Array and Object strict
console.log([1] === 1); // false (array is not a number)
console.log([1] === "1"); // false
console.log([] === 0); // false
console.log([] === false); // false

console.log("---");

console.log("=== PRACTICAL CONFUSING CASES ===");

// The infamous cases
console.log(0 == false); // true
console.log(0 === false); // false

console.log("" == false); // true
console.log("" === false); // false

console.log(null == false); // false (null doesn't coerce)
console.log(undefined == false); // false (undefined doesn't coerce)

console.log("0" == false); // true (both coerce)
console.log("0" === false); // false (different types)

console.log("---");

// What NOT to rely on
console.log([] == []); // false (different objects)
console.log({} == {}); // false (different objects)
console.log([] === []); // false (different objects)
console.log({} === {}); // false (different objects)

// But same reference
let arr = [1];
console.log(arr == arr); // true (same reference)
console.log(arr === arr); // true (same reference)

console.log("---");

console.log("=== BEST PRACTICE ===");
console.log("Always use === (strict equality)");
console.log("Avoid == unless you specifically need type coercion");
console.log("Use typeof to check types explicitly");
