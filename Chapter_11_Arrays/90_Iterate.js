//iterate - go from one to another

let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("---");

// for..of (cleanest for values)
for (const test of tests) {
    console.log(test);
}

console.log("---");

tests.forEach((test, index) => {
    console.log(test, index);
});

console.log("---");
let students = ["meena", "Reena", "Ajay", "Divu", "pREETA"];
for (let student in students) {
    console.log(student, "->", students[student]); // index = in
}

// use entries() to get [index, value]
console.log("---");
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

