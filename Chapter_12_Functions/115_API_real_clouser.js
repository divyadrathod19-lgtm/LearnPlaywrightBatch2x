function makeRetryTracker(max){
    let attempts =0;
    function tryAgain(testName){
        attempts++;
        if (attempts >max){
            retrun `${testName} exceded max retry(${max})`;
        }
        return `attempt $ {attempts}/${max}for ${testName}`;
    }
return tryAgain;

}
let retry = makeRetryTracker(3);
console.log("login");
console.log("login");
console.log("login");
console.log("login");
console.log("login");
