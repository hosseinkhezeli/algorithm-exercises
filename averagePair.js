/**
Multiple Pointers - averagePair
Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: 0(1)

Sample Input:
averagePair ([1,2,31],2.5) // true 
averagePair ([1,3,3,5,6,7,10,12,191],8) // true 
averagePair ([-1,0,3,4,5,6], 4.1) // false 
averagePair([1],4) // false
**/

function averagePair(nums, avg) {
  if (nums.length < 2) return false;
  const validLength = nums.findLastIndex((num) => num <= avg * 2);
  let left = 0;
  let right = validLength;
  while (left < right) {
    const currAvg = (nums[left] + nums[right]) / 2;
    if (currAvg === avg) return true;
    if (currAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

averagePair([1, 2, 31], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 191], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([1], 4); // false
