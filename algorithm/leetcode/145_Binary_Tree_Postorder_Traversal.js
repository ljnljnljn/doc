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
var postorderTraversal = function(root) {
    let res = []
    if(!root) return res
    postOrder(root, res)
    return res
};
function postOrder(node, res) {
    if(!node) return
    postOrder(node.left, res)
    postOrder(node.right, res)
    res.push(node.val)
}
