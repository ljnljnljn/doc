/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 根据二叉树的构造如果以i为根节点，那个其左子树由【1， i - 1】

var generateTrees = function(n) {
    if(!n) return []
    return dfs(1, n)
};
function dfs(start, end) {
    if(start > end) {
        return [null]
    }
    let res = []
    for(let i = start; i <= end; i++) {
        let lefts = dfs(start, i - 1);
        let rights = dfs(i + 1, end);
        lefts.forEach(left => {
           rights.forEach(right => {
               let node = new TreeNode(i);
               node.left = left;
               node.right = right
               res.push(node)
           }) 
        });
    }
    return res
}