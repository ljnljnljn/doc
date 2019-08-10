var sortList = function(head) {
    if(!head || !head.next) return head
    let slow = head, fast = head, prev = head
    while(fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev = null
    return _merge(sortList(head), sortList(slow))
}
function _merge(node1, node2) {
    let res = new ListNode(-1)
    let current = res
    while(node1 && node2) {
        if(node1.val < node2.val) {
            current.next = node1
            node1 = node1.next
        }else {
            current.next = node2
            node2 = node2.next
        }
        current = current.next
    }
    if(!node1) current.next = node2
    if(!node2) current.next = node1
    return res.next
}