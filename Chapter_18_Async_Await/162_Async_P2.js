function getToken(){
    return Promise.resolve("abc123")
}
async function run() {
    let token = await getToken();
    console.log(token);
};
run();

//until promise code run we will wait for the next code line 
//any function whihc 