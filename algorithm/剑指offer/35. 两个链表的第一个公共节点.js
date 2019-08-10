// 题目：输入两个链表，找出它们的第一个公共结点。
// 也可以利用栈空间，从尾到头进行比较
// 公共节点之后的所有节点都相同
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    var len1 = getLength(pHead1);
    var len2 = getLength(pHead2);
    var index, long,short
    if(len1 > len2) {
        index = len1 - len2;
        long = pHead1;
        short = pHead2;
    }else {
        index = len2 - len1;
        long = pHead2;
        short = pHead1;
    }
    
    for(var i = 0; i < index; i++) {
        long = long.next;
    }
    while(long !== null && short !== null && long !== short) {
        long = long.next;
        short = short.next;
    }
    return long
    
}

function getLength(pHead) {
    var len = 0;
    var pNode = pHead;
    while(pNode) {
        len++;
        pNode = pNode.next;
    }
    return len
}