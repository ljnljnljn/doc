// 题目： 请实现一个函数，用来判断一颗二叉树是不是对称的。
// 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    if(!pRoot) return true
    return symmetrical(pRoot, pRoot)
}
function symmetrical(node1, node2) {
    if(!node1 && !node2) return true
    if(!node1 || !node2) return false
    if(node1.val !== node2.val) return false
    return symmetrical(node1.left, node2.right) && symmetrical(node1.right, node2.left)
}
