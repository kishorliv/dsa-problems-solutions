/**https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashMap = {};
  for (let num of nums) {
    if (hashMap[num] != undefined) return true;
    hashMap[num] = 0;
  }

  return false;
};

const nums = [1, 2, 3, 1];
