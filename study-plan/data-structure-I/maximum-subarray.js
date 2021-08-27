/**https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], nums[i] + maxCurrent);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }

  return maxGlobal;
};

const nums = [5, 4, -1, 7, 8];
const res = maxSubArray(nums);
console.log(res);
