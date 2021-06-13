// https://leetcode.com/problems/add-strings/

function addStrings(a, b) {
  let result = "";
  let carry = 0;

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = (parseInt(a[i]) || 0) + (parseInt(b[j]) || 0) + carry;
    result = (sum % 10) + result;
    carry = parseInt(sum / 10);
  }
  if (carry !== 0) result = carry + result;

  return result;
}

let a = "0";
let b = "0";
const res = addStrings(a, b);
console.log(res);

// time complexity
// O(n), n is the longest among a.length or b.length
// space complexity
// O(n)
