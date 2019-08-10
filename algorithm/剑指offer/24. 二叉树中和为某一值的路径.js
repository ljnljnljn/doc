// 题目： 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// (注意: 在返回值的list中，数组长度大的数组靠前)

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 采用DFS
function FindPath(root, expectNumber)
{
    // write code here
    let res = [];
    if(root == null) {
        return res
    }
    findDFS(root, expectNumber, 0, [], res);
    return res
};
// 利用先序遍历
function findDFS(node, expectNumber, current, path, res) {
    current += node.val
    path.push(node.val)
    if(current === expectNumber && !node.left && !node.right) {
        res.push(path.slice(0))
    }
    if(node.left) {
        findDFS(node.left, expectNumber, current, path, res)
    }
    if(node.right) {
        findDFS(node.right, expectNumber, current, path, res)
    }
    path.pop()
}