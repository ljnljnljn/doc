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
var inorderTraversal = function(root) {
    let res = []
    if(!root) return res;
    inOrder(root, res)
    return res
};

function inOrder(treeNode, res) {
    if(!treeNode) return null
    inOrder(treeNode.left, res);
    res.push(treeNode.val);
    inOrder(treeNode.right, res)
}