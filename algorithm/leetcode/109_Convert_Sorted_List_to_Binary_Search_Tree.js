/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null;
    let res = [];
    while(head) {
        res.push(head.val)
        head = head.next
    }
    let node = rebuild(res)
    return node
};

function rebuild(nums) {
    let len = nums.length;
    if(len <= 0 || nums === null ) return null
    let mid = Math.floor(len / 2);
    let node = new TreeNode();
    node.val = nums[mid];
    node.left = rebuild(nums.slice(0, mid));
    node.right = rebuild(nums.slice(mid + 1));
    return node
}
