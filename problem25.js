// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let chars = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let res = 0;

    // traverse till second last roman char, since last char is always added
    for (let i = 0; i < s.length - 1; i++) {
        if (chars[s[i]] < chars[s[i + 1]]) res -= chars[s[i]];
        else res += chars[s[i]];
        console.log(res);
    }
    return res + chars[s[s.length - 1]];
};

const s = "LVIII";
const res = romanToInt(s);
console.log(res);
