var getIntersectionNode = function(headA, headB) {
    let len1 = getLen(headA)
    let len2 = getLen(headB)
    let short, long
    if(len1 > len2) {
        short = headB
        long = headA
    }else {
        short = headA
        long = headB
    }
    let index = Math.abs(len1 - len2)
    for(let i = 0; i < index; i++) {
        long = long.next
    }
    while(long !== null && short !== null && short !== long) {
        short = short.next
        long = long.next
    }
    return long
};

function getLen(node) {
    let len = 0
    let temp = node
    while(temp) {
        temp = temp.next
        len++
    }
    return len
}




var getIntersectionNode2 = function(headA, headB) {
    let stack1 = [], stack2 = []
    pushTarget(stack1, headA)
    pushTarget(stack2, headB)
    let res
    while(stack1[stack1.length - 1] === stack2[stack2.length - 1]) {
        res = stack1.pop()
        stack2.pop()
    }
    return res

}
function pushTarget(stack, head) {
    let temp = head
    while(temp) {
        stack.push(temp)
        temp = temp.next
    }
}