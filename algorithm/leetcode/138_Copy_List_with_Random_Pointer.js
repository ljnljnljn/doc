/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (head === null) return;

    // 对应思路二中的第一步：
    var currNode = head;
    while (currNode !== null) {
        var node = new RandomListNode(currNode.label);
        node.next = currNode.next;
        currNode.next = node;
        currNode = node.next;
    }

    // 对应思路二中的第二步：
    currNode = head;
    while (currNode !== null && currNode.next !== null) {
        if (currNode.random) {
            currNode.next.random = currNode.random.next;
        }
        currNode = currNode.next.next;
    }

    //拆分，对应思路二中的第三步：        
    var pCloneHead = head.next;
    var tmp = null;
    currNode = head;
    while (currNode.next !== null) {
        tmp = currNode.next;
        currNode.next = tmp.next;
        currNode = tmp;
    }
    return pCloneHead;
}


// ------------------test----------------------

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

let head = new RandomListNode(1)
let second = new RandomListNode(2)
let third = new RandomListNode(3)
let four = new RandomListNode(4)
let fifth = new RandomListNode(5)
head.next = second
second.next = third
third.next = four
four.next = fifth

head.random = third
second.random = third
third.random = head
four.next = second


copyRandomList(head)