/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 可以分割成三个小问题
// 1.使用快慢两个指针找到链表的中点，拆分成两个链表
// 2.将第二个链表翻转
// 3.将翻转后的链表插入到第一个链表中
var reorderList = function(head) {
    if(!head || !head.next || !head.next.next) return head
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let mid = slow.next
    slow.next = null
    let last = mid, prev = null
    while(last) {
        let temp = last.next
        last.next = prev
        prev = last
        last = temp
    }
    while(head && prev) {
        let temp = head.next
        head.next = prev
        prev = prev.next
        head.next.next = temp
        head = temp
    }
};