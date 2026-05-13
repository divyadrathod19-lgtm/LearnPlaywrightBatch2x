// Difference between backticks, single quotes, and double quotes in JavaScript

// Single quotes (' ') and double quotes (" ") are similar - they create basic string literals.
// Backticks (` `) create template literals, allowing variable interpolation and multi-line strings.

// Example:
let name = 'World';
let single = 'Hello ' + name + '!'; // Concatenation needed
let double = "Hello " + name + "!"; // Same as single quotes
let backtick = `Hello ${name}!`; // Interpolation with ${}

console.log('Single:', single); // Hello World!
console.log('Double:', double); // Hello World!
console.log('Backtick:', backtick); // Hello World!

// Backticks also support multi-line:
let multiLine = `This is
a multi-line
string.`;
console.log('Multi-line:', multiLine);