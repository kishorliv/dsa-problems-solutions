// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

let nums1 = [2, 0]; //[1, 2, 3, 0, 0, 0];
let m = 1; //3;
let nums2 = [1]; //[2, 5, 6];
let n = 1; //3;
merge(nums1, m, nums2, n);
console.log(nums1);

// time complexity
// O(m + n), worst case
// space complexity
// O(1)
