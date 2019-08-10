/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 采用前后两个指针遍历
function FindKthToTail(head, k)
{
    // write code here
    if(head == null || k <= 0) {
        return null;
    }
    var pAhead = head;
    var pBefore = head;
    for(var i = 0; i < k - 1; i++) {
        pAhead = pAhead.next;
        if(!pAhead) {return null}
    }
    while(pAhead.next) {
        pBefore = pBefore.next;
        pAhead = pAhead.next;
    }
    return pBefore
}
//本题采用两个指针只用一次遍历就可以找到