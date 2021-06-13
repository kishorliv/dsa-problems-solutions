// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  let min = prices[0];
  let maxPro = 0;

  if (prices.length === 0) return 0;

  for (let price of prices) {
    min = Math.min(price, min);
    let profit = price - min;
    maxPro = Math.max(profit, maxPro);
  }

  return maxPro;
}

const prices = [7, 1, 5, 3, 6, 4];
const res = maxProfit(prices);
console.log(res);

// time complexity
// O(n)
// space complexity
// O(1)
