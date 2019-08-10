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
var reverseKGroup = function(head, k) {
    let arr = [], res = [];
    while(head) {
        arr.push(new ListNode(head.val));
        head = head.next
    }
    if(!arr.length) return null
    let len = arr.length;
    for(let i = 0; i < len; i += k) {
        let temp;
        if(i +  k <= len) {
            temp = arr.slice(i, i + k);
            temp.reverse()
        }else {
            temp = arr.slice(i, len);
        }
        Array.prototype.push.apply(res, temp);
    }
    for(let i = 0; i < res.length - 1; i++) {
        res[i].next = res[i + 1];
    }
    return res[0]
};