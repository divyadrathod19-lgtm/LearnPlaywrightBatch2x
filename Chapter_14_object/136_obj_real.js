const Env = {
    base_URL :"https://stsging.myapp.com",
    timeout = 2000,
    retries = 2,
    browser ="chrome"
}

const expected_response ={
    status :200,
    body:{
        user:{role:"admin",active:true}
    }
}

const config ={
    //base_url 
    baseURL:'https://localhost:3000',
    apibaseURL :'https://localhost:300/api',

    testUser :{
        username :'testuser@example.com',
        password:'SecurePass123',
    
    },
    //logging
    logLevel:'info',

    //retry configuration 
    retryCount :parseInt(process.env.retryCount || '3',10),
};