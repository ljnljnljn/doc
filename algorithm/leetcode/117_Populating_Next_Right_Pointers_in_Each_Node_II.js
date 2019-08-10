/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
// bfs
var connect = function(root) {
    if(!root) return 
    let queue = []
    queue.push(root)
    while(queue.length) {
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let temp = queue.shift()
            if(i < len - 1) {
                temp.next = queue[0]
            }
            if(temp.left) queue.push(temp.left)
            if(temp.right) queue.push(temp.right)
        }
    }
};