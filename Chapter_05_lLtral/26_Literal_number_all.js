// JavaScript Number Types and Literals

// In JavaScript, there is primarily one number type: "number"
// It represents 64-bit floating-point numbers (IEEE 754)
// But there are different ways to write numbers and special values

// 1. Decimal integers
let decimal = 42;
console.log('Decimal:', decimal, typeof decimal); // 42 number

// 2. Binary literals (ES6+)
let binary = 0b1010; // 10 in decimal
console.log('Binary:', binary, typeof binary); // 10 number

// 3. Octal literals (ES6+)
let octal = 0o755; // 493 in decimal
console.log('Octal:', octal, typeof octal); // 493 number

// 4. Hexadecimal literals
let hex = 0xFF; // 255 in decimal
console.log('Hex:', hex, typeof hex); // 255 number

// 5. Floating-point numbers
let float = 3.14;
let scientific = 1.23e4; // 12300
console.log('Float:', float, typeof float); // 3.14 number
console.log('Scientific:', scientific, typeof scientific); // 12300 number

// 6. Special number values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;
console.log('Infinity:', infinity, typeof infinity); // Infinity number
console.log('-Infinity:', negInfinity, typeof negInfinity); // -Infinity number
console.log('NaN:', notANumber, typeof notANumber); // NaN number

// 7. BigInt (ES2020) - for large integers beyond Number.MAX_SAFE_INTEGER
let bigInt = 123456789012345678901234567890n;
let bigInt2 = BigInt('9007199254740991');
console.log('BigInt:', bigInt, typeof bigInt); // 123456789012345678901234567890n bigint
console.log('BigInt from string:', bigInt2, typeof bigInt2); // 9007199254740991n bigint

// Note: BigInt cannot be mixed with regular numbers in operations
// console.log(bigInt + 1); // Error: Cannot mix BigInt and other types

// All regular numbers are of type "number", BigInt is "bigint"
// JavaScript numbers are always 64-bit floats, even for integers