// 题目：在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，
// 返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
function deleteDuplication(pHead)
{
    if(!pHead) return null
    if(pHead && !pHead.next) return pHead
    let current
    if(pHead.val === pHead.next.val) {
        current = pHead.next.next
        while(current && current.val === pHead.val) {
            current = current.next
        }
        return deleteDuplication(current)
    }else {
        current = pHead.next
        pHead.next = deleteDuplication(current)
        return pHead
    }
}