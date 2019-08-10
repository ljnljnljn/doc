// 题目： 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 利用中序遍历
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null) {
        return;
    };
    let lastNode = null;
    lastNode = convertNode(pRootOfTree, lastNode);
    let head = lastNode;
    while(head && head.left) {
        head = head.left
    }
    return head
}

function convertNode(node, lastNode) {
    if(!node) return
    if(node.left) {
        lastNode = convertNode(node.left, lastNode)
    }
    node.left = lastNode
    if(lastNode) {
        lastNode.right = node
    }
    lastNode = node
    if(node.right) {
        lastNode = convertNode(node.right, lastNode)
    }
    return lastNode
}