// 题目：输入一棵二叉树，判断该二叉树是否是平衡二叉树。

// 平衡二叉查找树： AVL树，除了具有二叉查找树的基本特点外，
// 还具有：它的左子树和右子树都是平衡二叉树，
// 且左子树和右子树的深度之差的绝对值（平衡因子 ） 不超过 1
// 也就是说AVL树每个节点的平衡因子只可能是-1、0 和 1（左子树高度减去右子树高度）。

 
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot) return true
    let leftLen = TreeDepth(pRoot.left)
    let rightLen = TreeDepth(pRoot.right)
    if(Math.abs(leftLen - rightLen) > 1) {
        return false
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}

function TreeDepth(pRoot)
{
    // write code here
    if(!pRoot) return 0
    let left = TreeDepth(pRoot.left)
    let right = TreeDepth(pRoot.right)
    return left > right ? left + 1 : right + 1
}

// 本解法采用递归比较暴力的解法，一个节点可能会遍历多次