// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    if (s.length <= 1) return false;
    for (const ch of s) {
        if (ch === "(") stack.push(")");
        else if (ch === "{") stack.push("}");
        else if (ch === "[") stack.push("]");
        else if (ch === stack[stack.length - 1]) stack.pop();
        else return false;
    }

    if (stack.length === 0) return true;
    else return false;
};

const s = "{}";
const res = isValid(s);
console.log(res);
