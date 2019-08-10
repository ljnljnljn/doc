/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(!s || !t) {
        return false
    }
    return subTree(s,t) ||
           isSubTree(s.left, t) ||
           isSubTree(s.right, t)
};
function subTree(node1, node2) {
    if(!node2) return true
    if(!node1) return false
    if(node1.val !== node2.val) {
        return false
    }
    return subTree(node1.left, node2.left) && subTree(node1.right, node2.right)
}