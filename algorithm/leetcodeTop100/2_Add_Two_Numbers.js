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
    let sumList = new ListNode(-1)
    let current = sumList
    let carry = 0
    while(l1 || l2) {
        let x = l1 === null ? 0 : l1.val
        let y = l2 === null ? 0 : l2.val
        let sum = x + y + carry
        let value = sum % 10
        carry = Math.floor(sum / 10)
        current.next = new ListNode(value)

        current = current.next
        l1 = l1 === null ? l1: l1.next
        l2 = l2 === null ? l2: l2.next
        if(!l1 && !l2 && carry !== 0) {
            current.next = new ListNode(carry)
        }
    }
    return sumList.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(5)
let l2 = new ListNode(5)
console.log(addTwoNumbers(l1, l2))
    