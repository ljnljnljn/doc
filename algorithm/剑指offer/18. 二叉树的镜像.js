// 题目： 操作给定的二叉树，将其变换为源二叉树的镜像。 

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 采用递归方法
function Mirror(root)
{
    // write code here
    if(root == null) {
        return;
    }
    if(root.left == null && root.right == null) {
        return root
    }
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left !== null) {
        Mirror(root.left);
    };
    if(root.right !== null) {
        Mirror(root.right)
    };
    return root
}