/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return null;

    let tempVal = nums[0];
    let tempIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (tempVal !== nums[i]) {
            nums[++tempIndex] = nums[i];
            tempVal = nums[i];
        }
    }
    return tempIndex + 1;
};

const nums = [1, 1, 2];
const res = removeDuplicates(nums);
console.log(res);
