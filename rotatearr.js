const rotateArray = function(nums, k) {

    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    k %= nums.length;
  
    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
  }
  let arr1 =rotateArray([1,2,3,4,5],2)
  console.log(arr1);