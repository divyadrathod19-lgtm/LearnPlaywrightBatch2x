let g_x =10;

//nested scope |block scope 
function outer(){
    let x= 10;

    function inner(){
        let y= 20;
        console.log(x);

        inner();
        console.log (y);
        }
}
//function withing function is not allowd it is supported but we will not use it never ever 



