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
var swapPairs = function(head) {
    if(!head) return null;
    let res = [];
    while (head) {
        let next = head.next;
        head.next = null;
        res.push(head);
        head = next;
    }
    for(let i = 0; i < res.length; i += 2) {
        let a = res[i];
        let b = res[i + 1];
        if(!b) continue;
        res[i] = b;
        res[i + 1] = a;
    }
    for(let i = 0; i < res.length - 1; i++) {
        res[i].next = res[i + 1];
    }
    return res[0]
};