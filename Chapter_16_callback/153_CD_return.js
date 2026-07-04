function calculate(a,b,opration){
    return opration (a,b);
}
let sum = calculate (10,5, function (x,y){
    return x+y;
})
console.log(sum);