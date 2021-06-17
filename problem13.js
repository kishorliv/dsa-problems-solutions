// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0;
    let max = nums[0];
    for (let num of nums) {
        if (sum < 0) sum = 0;
        sum = Math.max(num, num + sum);
        max = Math.max(max, sum);
    }

    return max;
};

const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const res = maxSubArray(a);
console.log(res);
