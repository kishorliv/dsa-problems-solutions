/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return null;

  let temp = prices[0];
  let maxPro = 0;
  for (let i = 1; i < prices.length; i++) {
    if (temp < prices[i]) {
      maxPro += prices[i] - temp;
    }
    temp = prices[i];
  }

  return maxPro;
};

const prices = [1, 2, 3, 4, 5];
const res = maxProfit(prices);
console.log(res);
