// https://leetcode.com/problems/add-binary/

function addBinary(a, b) {
  let result = "";
  let carry = 0;

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let temp = 0;

    let tempSum = (parseInt(a[i]) || temp) + (parseInt(b[j]) || temp) + carry;
    carry = tempSum >= 2 ? 1 : 0;
    result = (tempSum % 2) + result;
  }
  result = carry === 0 ? result : carry + result;

  return result;
}

a = "0";
b = "0";
const res = addBinary(a, b);
console.log("binary add result: ", res);

// time complexity
// O(n), n is the longest among a.length or b.length
// space complexity
// O(n)
