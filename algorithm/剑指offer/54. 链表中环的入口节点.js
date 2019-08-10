// 题目： 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。


// 思路： 用快慢两个指针，测出环中包含的节点个数n；
// 再用两个快慢指针，快的先走n步，当快慢两个指针相遇时，就是入口节点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(!pHead) return null;
    var meetingNode = MeetingNode(pHead);
    if(!meetingNode) return null;
    var nodeLoop = 1;
    var pNode1 = meetingNode
    while(pNode1.next !== meetingNode) {
        pNode1 = pNode1.next;
        nodeLoop++;
    }
    pNode1 = pHead;
    for(var i = 0; i < nodeLoop; i++) {
        pNode1 = pNode1.next;
    }
    var pNode2 = pHead;
    while(pNode1 !== pNode2) {
        pNode1 = pNode1.next;
        pNode2 = pNode2.next;
    }
    return pNode1
}
function MeetingNode(node) {
    if(!node || !node.next) {
        return null;
    }
    var slow = node.next;
    var fast = slow.next;
    while(slow && fast) {
        if(slow == fast) {
            return fast
        }
        slow = slow.next;
        fast = fast.next;
        if(fast) {
            fast = fast.next
        }
    }
    return null;
}