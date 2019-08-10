// 前序遍历
function preorderTraversal(root) {
    let stack = [],
        res = [],
        p = root
    while(stack.length || p!== null) {
        if(p !== null) {
            stack.push(p)
            res.push(p.val)
            p = p.left
        }else {
            let temp = stack.pop()
            p = temp.right
        }
    }
    return res
}

// 中序遍历

function inorderTraversal(root) {
    let stack = [],
        res = [],
        p = root
    while(stack.length || p!== null) {
        if(p !== null) {
            stack.push(p)
            p = p.left
        }else {
            let temp = stack.pop()
            res.push(temp.val)
            p = temp.right
        }
    }
    return res
}

function postorderTraversal(root) {
    let stack = [],
        res = [],
        p = root
    while(stack.length || p!== null) {
        if(p!== null) {
            stack.push(p)
            res.unshift(p.val)
            p = p.right
        }else {
            let temp = stack.pop()
            p = temp.left
        }
    }
    return res
}