//if ourStatusCode >=200 && ourStatusCode <300)

//this is the normal function 
function validateStatusCode (status){
    if (status >=200 && status <=300){
        console.log("reuqest is fine ")
}
}

//this is the function expression 
const validateStatusCode_Exp = function(status){
    if (status >=200 && status <=300){
        console.log("reuqest is fine ")
}
}

//This is the arrow function 

const validateStatusCode_Arrow =(status)=>{
    if (status >=200 && status <=300){
        console.log("reuqest is fine ")
}
}
validateStatusCode_Arrow();
validateStatusCode_Arrow(200); // prints request is fine