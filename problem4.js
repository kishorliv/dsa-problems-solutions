// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

function maxProfit(prices) {
    let min = prices[0];
    let maxPro = 0;
    let profit = 0;

    if (prices.length === 0) return 0;

    for (let price of prices) {
        min = Math.min(min, price);

        profit = price - min;
        if (profit > 0) min = price;
        maxPro += profit;
    }

    return maxPro;
}

const prices = [7, 6, 4, 3, 1];
const res = maxProfit(prices);
console.log(res);
