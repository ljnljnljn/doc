function GetNext(pNode) {
    if(pNode) return null
    let pNext = null
    if(pNode.right) {
        let right = pNode.right
        while(right.left) {
            right = right.left
        }
        pNext = right
    }else {
        let parent = pNode.next
        let current = pNode
        while(parent && parent.right === current) {
            current = current.next
            parent = parent.next
        }
        pNext = parent
    }
    return pNext
}