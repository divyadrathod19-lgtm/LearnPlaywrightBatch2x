let testmatrix =[
    ["login","pass",200],
    ["checkkout","fail",404],
    ["search","pass",180]
];

for (let i=0;i<testmatrix.length;i++){
    for (let j =0;j<testmatrix[i].length;j++){
     console.log(testmatrix[i],[j]);
        }
     }
     //another way to use 
     for (let row of testmatrix){
        for(let cell of row){
            process.stdout.write(cell+" ") //  no new line 
        }
        console.log();// new line 
     }

     //another way with foreach loop - we are not going to use 
testmatrix.forEach(row=>{
    row.forEach(cell =>process.stdout.write(cell+" ") );
    console.log();
})
