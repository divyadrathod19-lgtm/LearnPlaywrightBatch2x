//multi dimention array 


let grid =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//i =raw ,J = column
//1 - index is 0,0
//index of 5 is  1,1

// [1,2,3],    index [0-0 ,0-1 ,0-2
// [4,5,6],           1-0, 1-1, 1-2
// [7,8,9]            2,0, 2,1, 2-2]


// print all element 
for (i=0;i<3;i++){
    for (let j =0;j <3;j++){
        console.log(grid[i][j]);
    }
    
}