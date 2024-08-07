/** 
Sliding Window - maxSubarray Sum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxsubarraySum([100,200,300,4001, 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,201, 4) // 39
maxSubarraySum([-3,4,0,-2,6, -11, 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,11,2) // 5
maxSubarraySum([2,31, 3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - 0(1)
**/

function maxSubarraySum(arr, interval) {
  let left = 0,
    maxSum = 0,
    sum = 0;
  if (arr.length < interval) return null;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (right >= interval - 1) {
      maxSum = Math.max(maxSum, sum);
      sum = sum - arr[left];
      left = right;
    }
  }
  return maxSum;
}
