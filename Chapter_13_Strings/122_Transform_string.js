let str ="Hello,World";
console.log (str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());


str.trimStart();
str.trimEnd();


let msg = "Test: Fail. Retry: Fail";
console.log(msg.replace("Fail","pass"));// replace only 1st one to pass
console.log(msg.replaceAll("Fail","pass"));// here replace all to Pass
console.log(msg.replace(/Fail/g, "pass"));// replace with matcing when ever we find faild replacce with pass 

//concetination are supported 

"hello"+" "+"world"; // simple
"hello".concat("", "world");// .concat
${"Hello"} ${"world"}; //template litral

let url ="https://app.vwo.com?app=prmod"
console.log(url.replace(/app/g,"QA"));

let r = "pass,fai;,skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts =["2026","03","01"];
let date =parts.join("-");
console.log(date);