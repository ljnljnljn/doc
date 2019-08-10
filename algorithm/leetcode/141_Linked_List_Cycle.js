/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 判断链表里是不是有环，利用快慢两个指针，假如有环，两个指针肯定会相遇
var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};