/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let newTree = null
    if(!t1 && !t2) return null
    if(!t1&&t2) {
        newTree = new TreeNode(t2.val)
        newTree.left = mergeTrees(null, t2.left)
        newTree.right = mergeTrees(null, t2.right)
    }
    if(t1 && !t2) {
        newTree = new TreeNode(t1.val)
        newTree.left = mergeTrees(t1.left, null)
        newTree.right = mergeTrees(t1.right, null)
    }
    if(t1 && t2) {
        newTree = new TreeNode(t1.val + t2.val)
        newTree.left = mergeTrees(t1.left, t2.left)
        newTree.right = mergeTrees(t1.right, t2.right)
    }
    return newTree
};