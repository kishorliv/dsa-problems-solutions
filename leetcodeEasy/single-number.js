/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }

  return result;
};

const nums = [4, 1, 2, 1, 2];
const res = singleNumber(nums);
console.log(res);
