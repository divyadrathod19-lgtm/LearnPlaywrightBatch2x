let rajkumar_age =18;
let RJ_will_goa = rajkumar_age >= 18 ? "RJ will go goa " : "No Goa";
console.log(RJ_will_goa); // RJ will go goa

//
//rajkumar_age >= 18 ? - condition
//Ture result/ if condition  - "RJ will go goa"
//False result/else condition  - "No Goa" 

//SYntax  : Condition ? "true result" : "false result";


//nested ternary operator
let age_promod = 45;
let promod_will_goa = age_promod >= 18 ? (age_promod > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(promod_will_goa);


//Interview quesition
let statuscode= 400;
let category=
statuscode <= 300 ? "Success" :
      statuscode <400? "Redirection" :
      statuscode <500? "Client Error" : "server error";
console.log(`Status ${statuscode}: ${category}`); //Client Error

let temp =35;
let feel =(temp>=40)?"veryhot":
    (temp>=30)?"hot":
        (temp>=20)?"warm":
        (temp>=10)?"cool":
        (temp>=0)?"cold":"freezing";
console.log("7.temperature:",temp,"|feel:",feel); //temperature: 35 | feel: hot