// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) return 0;

    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);

    if (leftDepth == 0 || rightDepth == 0)
        return 1 + Math.max(leftDepth, rightDepth);
    else return 1 + Math.min(leftDepth, rightDepth);
};
