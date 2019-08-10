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
var deleteDuplicates = function(head) {
    if(head === null && head.next === null) return head;
    let prev = new ListNode(0);
    prev.next = head;
    let start = prev;
    let curr = head;
    while(curr) {
        while(curr.next && curr.val === curr.next.val) {
            curr = curr.next
        }
        if(start.next == curr) {
            start = start.next
        }else {
            start.next = curr.next
        }
        curr = curr.next
    }
    return prev.next
};