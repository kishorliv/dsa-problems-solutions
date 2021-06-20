/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.topIndex = -1;
    this.min = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.topIndex < 0) {
        this.stack[++this.topIndex] = this.min = val;
        return;
    }

    if (val < this.min) {
        this.stack[++this.topIndex] = 2 * val - this.min;
        this.min = val;
    } else {
        this.stack[++this.topIndex] = val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.topIndex < 0) return;
    else if (this.stack[this.topIndex] < this.min) {
        this.min = 2 * this.min - this.stack[this.topIndex--];
    } else {
        this.stack[this.topIndex--];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.topIndex < 0) return null;
    else if (this.stack[this.topIndex] < this.min) {
        return this.min;
    } else {
        return this.stack[this.topIndex];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);

console.log(minStack.getMin());
minStack.pop();

console.log(minStack.getMin());
minStack.pop();

console.log(minStack.getMin());
minStack.pop();

console.log(minStack.getMin());

console.log(minStack);
