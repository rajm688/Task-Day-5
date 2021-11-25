// Print odd numbers in an array anonymous function

let oddnum = function (arr) {
    let b =  arr.filter((a)=>a%2==1);
    console.log(b)
   };
   oddnum([1,2,3,4,5]);
   
   // Print odd numbers in an array IIFE function
   
   (function (arr1){
     let c =  arr1.filter((a)=>a%2==1);
     console.log(c)
   })([1,2,3,4,5]);

   // Print odd numbers in an array IIFE function

let odd = arr2 => {console.log(arr2.filter((a)=>a%2==1))}
odd([1,2,3,4]) 