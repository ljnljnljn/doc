/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res= []
    if(!root) return res
    preOrder(root, res)
    return res
};
function preOrder(root, res) {
    if(!root) return 
    res.push(root.val)
    preOrder(root.left, res)
    preOrder(root.right, res)
}