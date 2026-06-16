let results = ["pass","fail","pass","error","skip"];

results.indexOf("fail");
results.indexOf("skip");

//search from the end 
results.lastIndexOf ("fail");

//includs -retrun boolean 
results.includes("error");//true
results.includes("skipp");//False

//find - retrun first matcing element
 let num = [10,25,30,45];
 let r = num.find(x=> x> 20);// 25
console.log(r);

 //find Index
 num.findIndex (n => n>20);//1,2,3


num.findLast (n =>n>20); //45

 num.findLastIndex(n => n>20);//3
