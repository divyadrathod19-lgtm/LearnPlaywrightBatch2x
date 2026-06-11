let value ="5";
console.log(typeof value); //string

switch (value){ 
    case 5:
        console.log("value is 5");
        break;  

    case "5":
        console.log("value is string 5");
        break;
}

let status =0;
console.log(typeof status); //number

switch (status){
    case false:
        console.log("status is false");
        break;  
    case 0:
        console.log("status is 0");     

        break;
}