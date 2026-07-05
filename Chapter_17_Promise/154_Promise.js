let order = new Promise(function (resolve, reject){
   let foodReady = true;
   if (foodReady) {
    resolve("pizza is ready");
   } else {
    reject("order is cancled due to rain")
   }
});
 console.log(order);