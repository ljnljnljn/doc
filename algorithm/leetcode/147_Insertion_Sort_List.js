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
var insertionSortList = function(head) {
    if(!head) return head
    let dummy = new ListNode(0)
    dummy.next = head
    let curr = head
    while(curr && curr.next) {
        if(curr.val > curr.next.val) {
            let prev = dummy
            while(prev.next && prev.next.val < curr.next.val) {
                prev = prev.next
            }
            let temp = prev.next
            prev.next = curr.next
            curr.next = curr.next.next
            prev.next.next = temp
        }else {
            curr = curr.next
        }
    }
    return dummy.next
};