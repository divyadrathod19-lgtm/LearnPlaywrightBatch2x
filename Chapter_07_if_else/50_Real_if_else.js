let isLoggedIn = true;
let userRole = "editor";
  if (isLoggedIn){
    if(userRole === "admin"){
        console.log ("Welcome Admin! You have full access.");
}
else if (userRole === "editor"){
    console.log("Welcome Editor! You can edit content.");
}
else if (userRole === "viewer"){
    console.log("Welcome Viewer! You can view content.");
}   
else{
    console.log ("Not a valid user role");
} 
}else {
    console.log("Please log in to access the system.");
}


