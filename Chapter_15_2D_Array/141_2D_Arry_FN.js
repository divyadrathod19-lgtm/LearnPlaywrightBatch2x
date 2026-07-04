let score =[
    [20,30,40],
    [50,60,70],
    [80,90,100]
]
  let rowsum =score.map(row =>row.reduce((a,b) =>a+b,0));
  console.log(rowsum);

  let suitResult =[
    ["login-pass","register-pass","logout-pass"],
    ["search-pass","filter-fail","sort-pass"],
    ["checkout-fail","payment-fail","confirm-pass"]
  ];

  for(let i=0; i<suitResult.length;i++){
    for(let j=0;j<suitResult[i].length;j++){
        if(suitResult[i][j].includes("fail"))
            console.log(suitResult[i][j]);
    }
  }