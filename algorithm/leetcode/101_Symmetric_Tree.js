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
// 判断二叉树是否镜像，采用递归，判断节点的左右子树是否相同
var isSymmetric = function(root) {
    if(!root) return true;
    let res = defineSymmetric(root.left, root.right);
    return res
};

function defineSymmetric(nodeLeft, nodeRight) {
    if(!nodeLeft && !nodeRight) return true;
    if(!nodeLeft && nodeRight || nodeLeft && !nodeRight || nodeLeft.val !== nodeRight.val) {
        return false
    }
    return defineSymmetric(nodeLeft.left, nodeRight.right) && defineSymmetric(nodeLeft.right, nodeRight.left);
}