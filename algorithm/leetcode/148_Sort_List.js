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
var sortList = function(head) {
    if(!head || !head.next) return head
    let slow = head, fast = head, prev = head;
    while(fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    // 将链表拆成两个
    prev.next = null
    return __merge(sortList(head), sortList(slow))
};
function __merge(head1, head2) {
    var tempNode = new ListNode(-1)
    let current = tempNode
    while(head1 && head2) {
        if(head1.val < head2.val) {
            current.next = head1
            head1 = head1.next
        }else {
            current.next = head2
            head2 = head2.next
        }
        current = current.next
    }
    if(head1) current.next = head1;
    if(head2) current.next = head2
    return tempNode.next
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1)
let two = new ListNode(3)
let three = new ListNode(5)
let four = new ListNode(2)

head.next = two
two.next = three
three.next = four

console.log(sortList(head))