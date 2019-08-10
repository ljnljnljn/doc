/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) {
        return head
    }
    let prev = null
    let current = head
    let next = null
    while(current) {
        next = current.next
        current.next = prev

        prev = current
        current = next
    }
    return prev
};