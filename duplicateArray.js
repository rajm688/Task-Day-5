// Remove duplicates from an array anonymous  function

let duplicate = function(arr){
   let uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    })
    console.log(uniqueArray)
}
duplicate([1,2,2,3,4,5]);

// Remove duplicates from an array IIFE  function

(function(arr1){
    let uniqueArray1 = arr1.filter(function(item, pos) {
         return arr1.indexOf(item) == pos;
     })
     console.log(uniqueArray1)
 })([1,2,2,3,4,5]);