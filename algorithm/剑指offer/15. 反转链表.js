// 题目： 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let head = pHead
    let next = null
    let prev = null
    while(head) {
        next = head.next
        head.next = prev
        
        prev = head
        head = next
    }
    return prev
}