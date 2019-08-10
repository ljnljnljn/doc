/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 采用DFS
var sumNumbers = function(root) {
    return dfs(root, 0)
};
function dfs(node, sum) {
    if(!node) return 0
    sum = sum * 10 + node.val
    if(!node.left && !node.right) return sum
    return dfs(node.left, sum) + dfs(node.right, sum)
}