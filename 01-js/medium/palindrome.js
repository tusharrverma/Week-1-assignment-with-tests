/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let newStr = str.replace(/[.,\/#!$%\?^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").split(" ").join("").toLowerCase();
  let strLength = newStr.length;
  for (i = 0; i <= strLength-1; i++) {
    if (newStr[i] === newStr[strLength-1-i]) {
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
