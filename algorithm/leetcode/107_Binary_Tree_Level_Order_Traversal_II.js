/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    if(!root) return res;
    let que = [];
    que.push(root);
    while(que.length) {
        let tempArr = [],len = que.length;
        for(let i = 0; i < len; i++) {
            let temp = que.shift();
            tempArr.push(temp.val);
            if(temp.left) que.push(temp.left);
            if(temp.right) que.push(temp.right);    
        }
        res.push(tempArr);
    }
    return res.reverse()
};