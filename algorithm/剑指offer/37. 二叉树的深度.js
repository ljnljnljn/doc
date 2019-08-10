// 题目：输入一棵二叉树，求该树的深度。
// 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if(!pRoot) return 0
    let left = TreeDepth(pRoot.left)
    let right = TreeDepth(pRoot.right)
    return right > left ? right + 1 : left + 1
}

// 采用递归的方法，如果一棵树只有一个节点，那么他的深度为1，
// 假如根节点只有左子树而没有右子树，那么他的深度为左子树的深度加1
// 假如根节点只有右子树而没有左子树，那么他的深度为右子树的深度加1
// 假如根节点有左子树和右子树，那么他的深度为左,右子树深度较大的值加1