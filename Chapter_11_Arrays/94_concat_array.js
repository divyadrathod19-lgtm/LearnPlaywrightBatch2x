let a =[1,2];
let b =[3,4];
let c= a+b;
console.log(c);

let d =[1,2];
let e =[3,4];
let f= d.concat(e);
console.log(f);

//spread (morden way - concatenation (....)
let g =[...a,...b];
console.log(g);

//join
let s =["pass","fail","skip"].join("|");
console.log(s);