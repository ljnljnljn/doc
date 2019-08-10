/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return (p != null && q != null && p.val == q.val
        && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
        || (p == null && q == null);
};

