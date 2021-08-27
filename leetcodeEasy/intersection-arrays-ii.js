/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hashMap = {};
  const result = [];

  if (nums1.length < nums2.length) {
    return intersect(nums2, nums1);
  }

  for (let elem of nums1) {
    if (!hashMap[elem]) {
      hashMap[elem] = 1;
    } else {
      hashMap[elem] = parseInt(hashMap[elem]) + 1;
    }
  }

  for (let elem of nums2) {
    if (hashMap[elem]) {
      let count = parseInt(hashMap[elem]);
      if (count > 0) {
        result.push(elem);
        hashMap[elem] = count - 1;
      }
    }
  }

  return result;
};

const nums1 = [
  54, 93, 21, 73, 84, 60, 18, 62, 59, 89, 83, 89, 25, 39, 41, 55, 78, 27, 65,
  82, 94, 61, 12, 38, 76, 5, 35, 6, 51, 48, 61, 0, 47, 60, 84, 9, 13, 28, 38,
  21, 55, 37, 4, 67, 64, 86, 45, 33, 41,
];
const nums2 = [
  17, 17, 87, 98, 18, 53, 2, 69, 74, 73, 20, 85, 59, 89, 84, 91, 84, 34, 44, 48,
  20, 42, 68, 84, 8, 54, 66, 62, 69, 52, 67, 27, 87, 49, 92, 14, 92, 53, 22, 90,
  60, 14, 8, 71, 0, 61, 94, 1, 22, 84, 10, 55, 55, 60, 98, 76, 27, 35, 84, 28,
  4, 2, 9, 44, 86, 12, 17, 89, 35, 68, 17, 41, 21, 65, 59, 86, 42, 53, 0, 33,
  80, 20,
];

const res = intersect(nums1, nums2);
console.log(res);
