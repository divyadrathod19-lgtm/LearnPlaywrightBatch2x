//iterate - go from one to another

let tests =["login","checkout","search"]
 for (i=0; i < tests.length;i++){
    console.log(tests[i]);
 }

 console.log("---");

 //for..of(clesnest for values)
 for (test of tests);
     console.log (tests);

 console.log("---");

 tests.forEach((test,index) => {
    console.log(test,index);
 })

 
 console.log("---");
 let students =["meena","Reena","Ajay","Divu","pREETA"];
 for (let student in students){
    console.log(student, "->", students[student]);//index =in 
 }
  

 // we willnot use 
 console.log("---");
 for (let [i,test]of tests.enties()){
      console.log(i,test);
 }

