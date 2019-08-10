/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 对节点做了一个判断，若是子树不是平衡的直接返回
var isBalanced = function(root) {
    if(depth(root) === -1) return false;
    else return true;
};
function depth(root) {
    if(!root) return 0;
    let left = depth(root.left);
    if(left === -1) return -1
    let right = depth(root.right);
    if(right === -1) return -1
    let diff = Math.abs(left - right);
    if(diff > 1) return -1
    return Math.max(left, right) + 1;
}