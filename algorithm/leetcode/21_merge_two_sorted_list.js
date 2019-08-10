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
    let i = l1, j = l2;
    let newLink = new ListNode(-1),
    cur = newLink;
    while(i && j && i.val !== undefined && j.val !== undefined){
        if(i.val < j.val){
            cur.next = i;
            i = i.next;
        }else{
            cur.next = j;
            j = j.next;
        }
        cur = cur.next
    }
    if(i && i.val !== undefined){
        cur.next = i
    }
    if(j && j.val !== undefined){
        cur.next = j;
    }
    return newLink.next 
};