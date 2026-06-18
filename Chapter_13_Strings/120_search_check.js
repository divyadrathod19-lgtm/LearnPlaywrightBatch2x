//seacrh and checking 

let url ="https://app.wingify.com/#/login"

//includs 
console.log(url.includes("staging"));
console.log(url.includes("production"));

//startWith/endwith

url.startsWith("https");//false
url.startsWith("https");//true
url.endsWith("login");//true

//index/lasstIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));


console.log(url.indexOf("nothere"));//if nothing is there than it will give you -1

console.log(url.search(/login/));
console.log(url.search(/vwo/));
