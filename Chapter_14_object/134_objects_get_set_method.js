
//this is the older way to create class and object   we are not going to use 

const user ={
    firstName :"divu",
    lastName :"rathod",
get fullName(){
    return this.firstName  +  this.lastName;
},
set fullName (value){
    [this.firstName,this.lastName] = value.split("  ");
}
}
console.log(user.fullName);
user.fullName ="jalpa chauhan";
console.log(user.fullName);


//objects -js{}
//class & object are diffrent 

// what we will use this format 
class user {
    firstName
    lastName
    fullName(){

    }
}