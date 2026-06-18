//pure function 
//a pure function always return the dsmr output for same input and has no side effect 

function calculatePassRate (total,passed){
    return ((passed/total)*100).toFixed(2);
}

console.log(calculatePassRate(10,7) );
console.log(calculatePassRate (10,7));



//Impure function 
//depend on external state

function isPassing(score){
return score >=threshold;//depend on external variable 
}

let threshold =70;
console.log(isPassing(threshold));