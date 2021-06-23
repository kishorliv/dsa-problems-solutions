// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (temp in hashMap) return [hashMap[temp], i];
        else hashMap[nums[i]] = i;
    }

    return null;
};

const nums = [3, 2, 4];
const target = 6;
const res = twoSum(nums, target);
console.log(res);
