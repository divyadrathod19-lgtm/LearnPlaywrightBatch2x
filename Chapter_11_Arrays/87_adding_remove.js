let arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);

//arr =  [1 ,2 ,3, 4, 5, 6] 
//Index =[0, 1, 2, 3, 4, 5]

arr.splice (2,1);// 2 mean from 2nd index remove one element
console.log(arr);

arr.splice(2,0,99);// 0 mean not remove the value from 2nd enement but add new value as 99
console.log(arr);

arr.splice(2,1,99); // 2 mean from 2nd index remove one element replace with 99
console.log(arr)

arr.splice(1,2,10,20);//from index one delete 2 element and add 2 new element so 2 & 3 will replaced by 10 & 20 
console.log(arr);
