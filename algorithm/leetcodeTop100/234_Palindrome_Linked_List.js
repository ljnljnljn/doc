/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return true
    let len = findLen(head)
    let stack = []
    let temp = head
    for(let i = 0; i < Math.floor(len / 2); i++) {
        stack.push(temp.val)
        temp = temp.next
    }
    temp = len % 2 === 0 ? temp : temp.next
    while(stack.length) {
        let val = stack.pop()
        if(val === temp.val) {
            temp = temp.next
        }else {
            return false
        }
    }
    return true
};

function findLen(head) {
    let len = 0
    let temp = head
    while(temp) {
        temp = temp.next
        len++
    }
    return len
}