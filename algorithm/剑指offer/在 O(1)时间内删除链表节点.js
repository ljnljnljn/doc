function deleteNode(head, tobeDelete) {
    if(head === null || tobeDelete === null) {
        return null
    }
    // 要删除的节点不是尾节点
    if (tobeDelete.next != null) {
        let next = tobeDelete.next
        tobeDelete.val = next.val
        tobeDelete.next = next.next
        next.next = null
    }else {
        if (head == tobeDelete) {
            head = null
        }else {
            let current = head
            while(current.next !== tobeDelete) {
                current = current.next
            }
            current.next = null
        }
    }
    return head
}