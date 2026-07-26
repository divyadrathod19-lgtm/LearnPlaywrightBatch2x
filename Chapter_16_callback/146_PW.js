function test (testName,callback){
    console.log(testName);
    callback;
}

//above call will be invisible to us that is presnt someware in playwrite directary and we will call from there 
//we will import this code from '@playwrite/test' and use it in paywrite scrit ;
//ex. : import .{.test.} from.'@playwrite/test'

test ("verify login page is working ",() =>{
    //write your Playwrite code //.
});