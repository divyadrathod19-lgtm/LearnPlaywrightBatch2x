let number = 7;
if (number%2==0){
    console.log("Even number");
}   else {
    console.log("Odd number");
}

let mark =85;
if (mark >=90){
    console.log("Grade A");
}else if (mark >=80  && mark <89){
    console.log("Grade B");
}else if (mark >=70 && mark <79){
    console.log("Grade C");     
}else if (mark >=60 && mark <69){
    console.log("Grade D");
}else {
    console.log("Fail");
}
// have condition for leap year,  || is or condition && is and condition 
//rule  1. year is divisible by 4 and not divisible by 100
//rule 2. year is divisible by 400  
//else -> not a leap year

let year = 2024;
if (year%4==0 && year%100 !==0 || year%400==0){
    console.log("Leap year");       
}else {
    console.log("Not a leap year");
}   

