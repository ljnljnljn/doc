/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false
    if(!root.left && !root.right) {
        if(root.val === sum) {
            return true
        }
        return false
    }
    let left, right
    if(root.left) {
        left = hasPathSum(root.left, sum - root.val)
    }
    if(root.right) {
        right = hasPathSum(root.right, sum - root.val)
    }
    return Boolean(left || right)
};

