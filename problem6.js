// https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function diameterOfBinaryTree(root) {
    let maxH = 0;
    maxHeight(root);
    return maxH;

    function maxHeight(root) {
        if (root == null) return 0;

        let leftH = maxHeight(root.left);
        let rightH = maxHeight(root.right);
        maxH = Math.max(maxH, leftH + rightH);

        return 1 + Math.max(leftH, rightH);
    }
}
