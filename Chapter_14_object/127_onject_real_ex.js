let config ={};

config.browser="chrome";
config.timeout = 3000;
config.testname ="login test"

console.log(config);

if (config.browser ==="chrome"){
    console.log("I will able to login");
}

// we can delete any keys too 

delete config.browser;
console.log(config);


//another way to create object 
let config2 ={
    browser ="chrome",
    timeout =320,
    testname ="login test"

}