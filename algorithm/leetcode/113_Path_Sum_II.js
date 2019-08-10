/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = []
    if(!root) return res
    findPath(root, sum, 0, res, [])
    return res
};
function findPath(node, sum, current, res, path) {
    current += node.val
    path.push(node.val)
    if(current === sum && !node.left && !node.right) {
        res.push(path.slice(0))
    }
    if(node.left) {
        findPath(node.left, sum, current, res, path)
    }
    if(node.right) {
        findPath(node.right, sum, current, res, path)
    }
    path.pop()
}