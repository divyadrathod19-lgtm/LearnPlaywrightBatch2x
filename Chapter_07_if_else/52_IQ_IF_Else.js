if ("hello") console.log("String is true");
if (42)console.log("Number is true");
if({})console.log("Empty Object is true");
if([])console.log("Empty Array is true");

if ("")console.log("Empty string is false won't print");
if(null)console.log("null is false won't print");
if(undefined)console.log("undefined is false won't print");
if(0)console.log("0 is false won't print");
if(NaN)console.log("NaN is false won't print");    

let name = undefined;
if(name){
    console.log("Hi");
}else {
    console.log("Please provide a name");
}    