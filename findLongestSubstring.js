/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring(*') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6]
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8|
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
**/

function findLongestSubstring(str) {
  if (str.length < 1) return 0;
  const char = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    if (char[str[right]]) {
      left = Math.max(left, char[str[right]]);
    }

    char[str[right]] = right;

    maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
}
