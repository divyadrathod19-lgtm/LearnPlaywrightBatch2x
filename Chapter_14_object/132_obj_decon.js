const user ={name1:"Json",age:30 ,city:"NCY"};

//basic destructuring 
const {name1,age}= user;
console.log(name1);
console.log(age);


//rename variable
const {name1:userName,age: userAge} =user;
console.log(userName);
console.log(userAge);



//destructuring
 //const {age} = user;


//default value 
const{country ="USA"}= user;
console.log(country);

const data ={
    user:
    {
        name:"json",address:
          {
            city:"NYC"
        }
    }
}
const {user:{address:{city}}} =data;
console.log(data.user.address.city);