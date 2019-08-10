// 题目：输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 归并法
function Merge(pHead1, pHead2)
{
    // write code here
    if(!pHead1) return pHead2
    if(!pHead2) return pHead1
    let merge_list = null
    if(pHead1.val < pHead2.val) {
        merge_list = pHead1
        merge_list.next = Merge(pHead1.next, pHead2)
    }else {
        merge_list = pHead2
        merge_list.next = Merge(pHead1, pHead2.next)
    }
    return merge_list
}

// 非递归版本
function Merge(pHead1, pHead2)
{
    if(pHead1 === null) {
        return pHead2
    }
    if(pHead2 === null) {
        return pHead1
    } 
    let merge_list = null,
        current = null
    while(pHead1 !== null && pHead2 !== null) {
        if(pHead1.val < pHead2.val) {
            if(merge_list === null) {
                merge_list = current = pHead1
            }else {
                current.next = pHead1
                current = current.next
            }
            pHead1 = pHead1.next
        }else {
            if(merge_list === null) {
                merge_list = current = pHead2
            }else {
                current.next = pHead2
                current = current.next            
            }
            pHead2 = pHead2.next
        }
    }
    if(pHead1 == null) {
        current.next = pHead2
    }
    if(pHead2 === null) {
        current.next = pHead1
    }
    return merge_list
}