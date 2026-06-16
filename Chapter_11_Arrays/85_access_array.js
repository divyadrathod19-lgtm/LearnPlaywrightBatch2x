//accessing & modifying 

let statuses =["pass","Fail","skip"];
console.log (statuses[2]);
console.log (statuses[1]);


console.log(statuses.at(-1));
console.log(statuses.at(-3));


//Modify

statuses[1] ="blocker";
console.log(statuses);