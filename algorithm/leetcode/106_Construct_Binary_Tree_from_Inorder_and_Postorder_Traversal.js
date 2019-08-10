/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let len = postorder.length;
    if(len <= 0) return null;
    let root = new TreeNode();
    root.val = postorder[len - 1];
    let index = inorder.indexOf(postorder[len - 1]);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, len - 1))
    return root
};