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
    if(head === null){
        return head;
    }
    let first = head;
    let second = head.next;
    while(second){
        if(first.val === second.val){
            first.next = second.next;
        }else{
            first = second;    
        }
        second = second.next;
    }
    return head;
};