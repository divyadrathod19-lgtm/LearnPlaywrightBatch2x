//rever string |palindrom program
//java anagram 


const obj = {a:1, b:2, c:3};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


//iterate {`${}:${}`}-- mostly used
const user = {name:"json",age:30};
for(const key in user){
    console.log(`${key}:${user[key]}`);
}

//object.key/value/entires -- we are not going to use 
Object.keys(user).forEach(key =>{
    console.log(key);
})

