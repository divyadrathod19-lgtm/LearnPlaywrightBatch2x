// null vs undefined in JavaScript

// undefined means a variable exists but has not been given a value yet.
let a;
console.log('a:', a); // undefined

// null means a variable has been intentionally set to "no value".
let b = null;
console.log('b:', b); // null

// Key differences:
// 1. undefined is the default value for uninitialized variables.
// 2. null is used when you want to explicitly say "there is no value here".
// 3. typeof undefined is "undefined".
// 4. typeof null is "object" (this is a known JavaScript quirk).

console.log('typeof a:', typeof a); // undefined
console.log('typeof b:', typeof b); // object

// Simple rule:
// - use undefined when a variable has not been assigned yet.
// - use null when you assign it intentionally to represent "empty".

// Example:
function getUser(id) {
  if (id === 0) {
    return null; // user not found on purpose
  }
  // no return means undefined
}

console.log('getUser(0):', getUser(0)); // null
console.log('getUser(1):', getUser(1)); // undefined
