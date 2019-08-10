// 前序遍历
function preorderTraversal(root, arr) {
    arr.push(root.val)
    if(root.left) {
        preorderTraversal(root.left, arr)
    }
    if(root.right) {
        preorderTraversal(root.right, arr)
    }
    return arr
}

// 中序遍历

function inorderTraversal(root, arr) {
    if(root.left) {
        preorderTraversal(root.left, arr)
    }

    arr.push(root.val)

    if(root.right) {
        preorderTraversal(root.right, arr)
    }
    return arr
}

// 后续遍历

function postorderTraversal(root, arr) {
    if(root.left) {
        preorderTraversal(root.left, arr)
    }
    if(root.right) {
        preorderTraversal(root.right, arr)
    }
    arr.push(root.val)
    return arr
}