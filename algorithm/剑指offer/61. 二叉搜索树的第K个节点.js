// 题目：给定一棵二叉搜索树，请找出其中的第k小的结点。
// 例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 采用中序遍历，遍历到第K个节点
function KthNode(pRoot, k)
{
    // write code here
    if(!pRoot || k === 0) return null;
    return findK(pRoot)
    function findK(node) {
        var res = null;
        
        // 左
        if(node.left) {
            res = findK(node.left);
        }

        // 中
        if(!res) {
            if(k == 1) {
                res = node;
            }
            k--;
        }

        // 右
        if(!res && node.right) {
            res = findK(node.right);
        }
        return res
    }
}