// 题目： 给定单向链表的头指针head和一个节点指针p，定义一个函数在O(1)时间删除该节点p。

//要求时间复杂度为O(1)
function DeleteNode(pHead,pDelete) {
    if(!pHead || !pDelete) return;
    // 给定的节点不是尾节点
    if(pDelete.next) {
        var pNext = pDelete.next;
        pDelete.value = pNext.value;
        pDelete.next = pNext.next;
        pNext.value = null;
        pNext.next = null;
    // 头结点 
    }else if(pHead == pDelete) {
        pDelete = null;
        pHead = null
    }else {
        var pNode = pHead;
        while(pNode.next) {
            pNode = pNode.next
        }
        pNode.next = null
        pDelete = null;
    }
}