function makeCounter(start =0){
    let count =start;
    return{
        increment(){count++},
        decemennt(){count--},
        get (){return count;}
    }
    
}
let counter =makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decemennt();
console.log(counter.get());
