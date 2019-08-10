/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head === null){
        return;
    }
    let p = head, q = head;
    for(let i = 0;i<n;i++){
        q = q.next;
    }
    if(q === null){
        head = head.next;
        return head;
    }
    while(q.next !== null){
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;
    return head;
}