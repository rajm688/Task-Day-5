// Return all the prime numbers in an array anonymous function
let primenum = function (arr){
  arr=  arr.filter((num)=>{
    for(i=2; i<= Math.sqrt(num); i++){
      if(num%i === 0) return false;
    }
      return true;
    });
console.log(arr);
}
primenum([1,2,3,4,5,6,7,8,9]);

// Return all the prime numbers in an array IIFE function
(function (arr){
  arr=  arr.filter((num)=>{
    for(i=2; i<= Math.sqrt(num); i++){
      if(num%i === 0) return false;
    }
      return true;
    });
console.log(arr);
})([1,2,3,4,5,6,7,8,9]);

// Return all the prime numbers in an array arrow function
 let primenum1 =  ((arr) => {
  arr=  arr.filter((num)=>{
    for(i=2; i<= Math.sqrt(num); i++){
      if(num%i === 0) return false;
    }
      return true;
    });
console.log(arr);
})
primenum1([1,2,3,4,5,6,7,8,9,11,13]);

