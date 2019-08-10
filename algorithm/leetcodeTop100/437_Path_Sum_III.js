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
 * @return {number}
 */
var pathSum = function(root, sum) {
    let current = []
    let curSum = 0
    let res = 0
    findPath(root, sum, curSum, current)
    return res
    function findPath(node, sum, curSum, current) {
        if(!node) return null
        curSum += node.val
        current.push(node)
        if(curSum === sum) res++
        let temp = curSum
        for(let i = 0; i < current.length; i++) {
            temp -= current[i].val
            if(temp === sum) {
                res++
            }
        }
        findPath(node.left, sum, curSum, current)
        findPath(node.right, sum, curSum, current)
        current.pop()
    }
};

