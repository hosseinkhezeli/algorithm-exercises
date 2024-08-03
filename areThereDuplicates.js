/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/

//Time -O(n)
//Space -O(n)

// function areThereDuplicates(...args) {
// if (!args.length) return false;

//   let uniqueValues = {};

//   for (let i = 0; i < args.length; i++) {

//     if (uniqueValues[args[i]]) {
//       return true;
//     } else {
//       uniqueValues[args[i]] = true;
//     }
//   }
//   return false;
// }

// Time - O(n log n)
// Space - O(1)
function areThereDuplicates(...args) {
  if (!args.length) return false;
  args.sort((a, b) => String(a).charCodeAt() - String(b).charCodeAt());
  let right = args.length;
  let left = 0;
  while (left < right) {
    if (args[left] === args[left + 1]) {
      return true;
    } else {
      left++;
    }
    if (args[right] === args[right - 1]) {
      return true;
    } else {
      right--;
    }
  }
  return false;
}

areThereDuplicates(1, 5, 3,6);
areThereDuplicates(1, 2, 2);
areThereDuplicates("a", "b", "c", "d");
areThereDuplicates("a", "b", "c", "d", "a");
