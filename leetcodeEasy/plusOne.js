/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let tempResult = [];
  let iStart = digits.length - 1;

  for (i = iStart; i >= 0; i--) {
    if (digits[i] === 9) {
      tempResult[i] = 1;
      tempResult[i + 1] = 0;
    } else {
      tempResult[i + 1] = digits[i] + 1;
      return [...digits.slice(0, i), ...tempResult.slice(i + 1)];
    }
  }

  return [...tempResult.slice(i + 1)];
};

const digits = [6];
const res = plusOne(digits);
console.log(res);
