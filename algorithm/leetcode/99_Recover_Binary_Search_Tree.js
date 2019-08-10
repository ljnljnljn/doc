/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

//  使用中序遍历，然后进行排序，再对节点一一赋值
var recoverTree = function(root) {
    let list = [];
    let valArr = [];
    inorderTree(root, list, valArr);
    valArr.sort((a, b) => {
        return a - b;
    })
    for(let i = 0; i < list.length; i++) {
        list[i].val = valArr[i]
    }

};
function inorderTree(root, list, valArr) {
    if(!root) {
        return null;
    }
    inorderTree(root.left, list, valArr);
    list.push(root);
    valArr.push(root.val);
    inorderTree(root.right, list, valArr);
}