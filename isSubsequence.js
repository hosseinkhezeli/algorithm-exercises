/** 
Multiple Pointers - isSubsequence
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

function isSubsequence(subStr, str) {
  const char = [];
  let subStrLeft = 0;

  if (subStr.length > str.length) return false;

  for (let right = 0; right < str.length; right++) {
    if (subStr[subStrLeft] === str[right]) {
      char.push(subStr[subStrLeft]);
      subStrLeft++;
    }
  }
  return subStr === char.join("");
}

function isSubsequenceAi(subStr, str) {
  let subStrLeft = 0;
  if (subStr.length > str.length) return false;
  for (let right = 0; right < str.length; right++) {
    if (subStr[subStrLeft] === str[right]) {
      subStrLeft++;
    }

    if (subStrLeft === subStr.length) {
      return true;
    }
  }

  return subStrLeft === subStr.length;
}
