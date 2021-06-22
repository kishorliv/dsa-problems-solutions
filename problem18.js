// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
            ++j;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};

const nums = [1, 1, 2];
const res = removeDuplicates(nums);
console.log(res);
