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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = l1.val + l2.val;
    let result = new ListNode(sum%10);
    let node = result;
    carry = sum > 9? 1 : 0;
    let next1 = l1.next , next2 = l2.next;
    while(next1 || next2 ||sum !==0){
        sum = next1.val + next2.val + carry;
        node.next = new ListNode(sum%10);
        node = node.next;
        carry = sum > 9? 1 : 0;
        next1 = next1.next;
        next2 = next2.next;        
    }
    
    return result
};