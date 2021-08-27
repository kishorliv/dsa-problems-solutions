/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[j++] = nums[i];
  }

  for (; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
};

const nums = [0, 0];
const res = moveZeroes(nums);
console.log(res);
