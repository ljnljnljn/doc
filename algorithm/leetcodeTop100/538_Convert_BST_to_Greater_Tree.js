/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let curSum = 0
    if(!root) return null
    findSum(root)
    return root

    function findSum(root) {
        if(root.right) {
            findSum(root.right)
        } 
        root.val += curSum 
        curSum = root.val
        if(root.left) {
            findSum(root.left)
        }
   }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let node = new TreeNode(5)
let node1 = new TreeNode(2)
let node2 = new TreeNode(13)
node.left = node1
node.right = node2

console.log(convertBST(node))