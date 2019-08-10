/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode(-1)
    let i = l1
        j = l2
        current = newList
    while(i && j && i.val !== undefined && j.val !== undefined) {
        if(i.val < j.val) {
            current.next = i
            i = i.next
        }else {
            current.next = j
            j = j.next
        }
        current = current.next
    }
    if(i && i.val !== undefined) {
        current.next = i
    }
    if(j && j.val !== undefined) {
        current.next = j
    }
    return newList.next
};