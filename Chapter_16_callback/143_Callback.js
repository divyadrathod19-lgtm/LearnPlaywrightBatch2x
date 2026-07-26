function print (){
    console.log("normal function is called")
}

function placeorder (clipbordItem, PromodCallback){//promodCallback is the variable name 
    console.log ("hi your order is placed");
    PromodCallback();
}

//with the above code we can't print the function we have to call the function 
// to callback above code we have 3 ways 
//first way 
placeorder("Pizza", print);

//second way anoy function 
placeorder("Burger", function(){
    console.log("Anoy fn, I am also function without name!")
});

//Third way -> Arrow Fun 
placeorder("momos", ()=>{
    console.log("Arrow fn,I am also function without name!")
});


//basically call back is do your task first and than call me in last once you are done 