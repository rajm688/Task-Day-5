// Return all the palindromes in an array
const arr = [121, "raj","sas", 134,414];

let ispalindrom = function(item){
    let str  =  String(item);
    let i = 0;
    let j = str.length-1
    while(i<j){
        if(str[i]==str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
    };
let findpalindrome = function(arr){
    return arr.filter(item =>ispalindrom(item));
};
console.log(findpalindrome(arr))

// Return all the palindromes in an array using arrow function

const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = ele => {
   const str = String(ele);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr1 => {
   return arr1.filter(ele => isPalindrome(ele));
};
console.log(findPalindrome(arr1));