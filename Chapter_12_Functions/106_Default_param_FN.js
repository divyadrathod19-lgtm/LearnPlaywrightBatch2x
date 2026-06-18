function retry(testName, maxRetries, delay) {
	console.log(`retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("login test", 3, 1000);


//option 2
function retry(testName, maxRetries =3, delay=1000) {
	console.log(`retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("login test");
retry("registration test", 5,2000);
