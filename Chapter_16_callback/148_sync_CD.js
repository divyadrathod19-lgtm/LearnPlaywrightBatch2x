let testResult =["pass","fail","pass","skip"];
testResult.forEach(function (result,index){
    console.log ("test" + index + "->" + result);
}
)

//this is the perfect example of synchronous callback where 
// the anoymous function will take item 1 by 1 .
// it will take the indexv1 by 1 it will take the result 1 by 1, and print result 1 by 1 

