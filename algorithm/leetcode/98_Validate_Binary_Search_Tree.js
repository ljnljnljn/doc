/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true;
    let arr = [];
    inoderTree(root, arr);
    let sortArr = arr.slice(0);
    sortArr.sort((a, b) => {
        return a - b
    });
    let set = new Set(sortArr);
    return arr.toString() == sortArr.toString() && [...set].length === arr.length

};

function inoderTree(root, arr) {
    if(!root) {
        return null;
    }
    inoderTree(root.left, arr);
    arr.push(root.val);
    inoderTree(root.right, arr);
}