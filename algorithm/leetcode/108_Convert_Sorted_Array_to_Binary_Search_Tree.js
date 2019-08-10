/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let len = nums.length;
    if(len <= 0 || nums === null ) return null
    let mid = Math.floor(len / 2);
    let node = new TreeNode();
    node.val = nums[mid];
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));
    return node
};
