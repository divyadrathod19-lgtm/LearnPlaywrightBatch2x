//we will use Async followed by function 

function getToken(){
    return Promise.resolve("abc123")// untile thsi code run we will wait for await 
}
async function run() {
    let token = await getToken();//this code will run once promise will run 
    console.log(token);
};
run();

//until promise code run we will wait for the next code line 
//any function whihc 