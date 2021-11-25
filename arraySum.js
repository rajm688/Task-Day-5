// Sum of all numbers in an array anonymous function
let sum = function(arr){
    let total =arr.reduce((total,num)=> total + num)
  console.log(total)
  }
  sum([1,2,3,4,5]);
  
  // Sum of all numbers in an array IIFE function
  
  (function(arr1){
    let total1= arr1.reduce((sum,intval) => sum+intval);
    console.log(total1)
  })([1,2,3,4,5,6]);

  // Sum of all numbers in an array arrow function
  let sum3= arr2 =>{
    let total2= arr2.reduce((sum,intval) => sum+intval);
    console.log(total2)
  }
  sum3([10,20,30])
