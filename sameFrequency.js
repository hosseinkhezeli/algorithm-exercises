/**
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

 Your solution MUST have the following complexities:
 Time: O(N)

 Sample Input:
 sameFrequency (182, 281) // true
 sameFrequency (34,14) // false
 sameFrequency (3589578, 5879385) // true
 sameFrequency (22,222) // false
 **/

function sameFrequency(num1, num2) {
    const frequency = {};
    const strNum1 = String(num1);
    const strNum2 = String(num2);
    if (strNum1.length !== strNum2.length) {
        return false;
    }
    for (let i = 0; i < strNum1.length; i++) {
        frequency[strNum1[i]] = (frequency[strNum1[i]] || 0) + 1;
    }
    for (let i = 0; i < strNum2.length; i++) {
        if (!frequency[strNum2[i]]) {
            return false;
        }
        frequency[strNum2[i]] -= 1;
    }
    for (let i = 0; i < Object.values(frequency).length; i++) {
        if (Object.values(frequency)[i] !== 0) {
            return false;
        }
    }
    return true;
}
