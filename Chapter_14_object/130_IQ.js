const user ={
    name :"divu",
    age :10,
    pho:221985
}
console.log(user)
console.log(user.name);
console.log(user["age"]);



//dynamic propert access 
const key ="age" ;
    console.log(user[key]);

//adding/modifying propertird 
user.city ="NCY";
user.age= 31;
console.log(user);
