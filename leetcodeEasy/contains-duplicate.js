/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashMap = {};
  for (const [i, value] of nums.entries()) {
    if (hashMap.hasOwnProperty(value)) return true;
    hashMap[value] = i;
  }

  return false;
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const res = containsDuplicate(nums);
console.log(res);
