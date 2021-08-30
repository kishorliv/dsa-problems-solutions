/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (const [i, num] of nums.entries()) {
    let diff = target - num;

    if (map.get(diff) !== undefined) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }

  return [];
};

const nums = [2, 7, 11, 15],
  target = 9;
const res = twoSum(nums, target);
console.log(res);
