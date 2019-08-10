/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null) return null;
    let temp = [];
    while(head) {
        temp.push(new ListNode(head.val))
        head = head.next
    }
    k %= temp.length;
    let res = []
    if(k) res = temp.slice(-k);
    temp.splice(-k, k)
    Array.prototype.unshift.apply(temp, res);
    for(let i = 0; i < temp.length - 1; i++) {
        temp[i].next = temp[i + 1]
    }
    return temp[0]
};

// 也可以使用快慢两个指针