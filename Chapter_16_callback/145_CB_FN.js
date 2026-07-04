function cafe(item, callWhenTableIsReady){
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item);
    callWhenTableIsReady();
}

function callWhenTableIsReady(){
    console.log("calling 9876543210");
}

cafe("Burger",callWhenTableIsReady);

cafe ("Pizza", function () {
    console.log("calling 876532123")
});

cafe ("momos", () => {
    console.log("calling 99866432")
});
