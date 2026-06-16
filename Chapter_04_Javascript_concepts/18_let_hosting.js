console.log(score);
let score =100;

//--TDZ for score start here
//console.log(score); //ReferenceError: Cannot access 'score' before initialization
//let score =100; //score is in TDZ from the start of the block until the declaration is processed
//--TDZ for score ends here     