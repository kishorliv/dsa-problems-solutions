// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rem = 0;
    let res = 0;
    let isNeg = false;

    if (x < 0) {
        x = x * -1;
        isNeg = true;
    }
    while (x != 0) {
        rem = x % 10;
        x = parseInt(x / 10);
        res = res * 10 + rem;
    }

    if (isNeg) res = res * -1;
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0;
    else return res;
};

const num = 1534236469;
const res = reverse(num);
console.log(res);
