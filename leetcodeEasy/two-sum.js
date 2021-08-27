/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/546/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (const [i, num] of nums.entries()) {
    let tempVal = target - num;

    if (map.get(tempVal) !== undefined) {
      return [map.get(tempVal), i];
    }

    map.set(num, i);
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
const res = twoSum(nums, target);
console.log(res);
