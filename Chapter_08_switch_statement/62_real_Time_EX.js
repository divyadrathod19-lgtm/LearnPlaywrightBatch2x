let responseCode = 404;

switch (responseCode) { 
    case 200:
        console.log("API is working fine"); 
        break;
    case 404:
        console.log("API is not found");            
        break;
   
    default:
        console.log("Anot status code match");
}   