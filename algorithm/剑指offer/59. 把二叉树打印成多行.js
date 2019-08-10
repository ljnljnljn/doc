// 题目： 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 通过队列先进先出的性质来保存层级二叉树
function Print(pRoot)
{
    // write code here
    let res = []
    if(!pRoot) return res
    let queue = []
    queue.push(pRoot)
    while(queue.length) {
        let temp = []
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let tempNode = queue.shift()
            temp.push(tempNode.val)
            if(tempNode.left) queue.push(tempNode.left)
            if(tempNode.right) queue.push(tempNode.right)
        }
        res.push(temp)
    } 
    return res
}