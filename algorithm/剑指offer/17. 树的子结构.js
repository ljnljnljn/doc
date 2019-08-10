// 题目： 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 递归调用，考虑边界情况
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 == null || pRoot2 == null) {
        return false;
    }
    return isSubTree(pRoot1, pRoot2) 
            || HasSubtree(pRoot1.left, pRoot2)
            || HasSubtree(pRoot1.right, pRoot2)

}

function isSubTree(tree1, tree2) {
    if(tree2 === null) return true
    if(tree1 === null) return false
    if(tree1.val === tree2.val) {
        return isSubTree(tree1.left, tree2.left) && isSubTree(tree1.right, tree2.right)
    }else {
        return false
    }
}

