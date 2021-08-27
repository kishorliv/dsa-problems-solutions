/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const res = rotate(nums, k);
console.log(res);
