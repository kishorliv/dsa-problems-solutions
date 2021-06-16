// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let queue = [];
    let res = [];

    if (root == null) return res;

    queue.push(root);

    while (queue.length > 0) {
        let temp = [];
        let queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            let curRef = queue.shift(); //dequeue
            temp.push(curRef.val);
            if (curRef.left != null) queue.push(curRef.left);
            if (curRef.right != null) queue.push(curRef.right);
        }
        res.push(temp);
    }
    return res;
};
