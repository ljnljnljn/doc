/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(-1);
    dummy.next = head
    head = dummy
    for(let i = 1; i< m; i++) {
        head = head.next
    }
    let headOfSubList = head.next,
        nodeBeforeHead = head,
        nextNode = head.next.next,
        currNode = head.next;
    for(let i = m; i < n; i++) {
        let temp = nextNode.next;
        nextNode.next = currNode;
        currNode = nextNode;
        nextNode = temp
    }
    headOfSubList.next = nextNode;
    nodeBeforeHead.next = currNode;
    return dummy.next
};