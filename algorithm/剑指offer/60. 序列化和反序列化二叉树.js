// 题目： 请实现两个函数，分别用来序列化和反序列化二叉树


// 应该是广度遍历
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot)
{
    // write code here
    var arr = [];
    serialize(pRoot);
    return arr.join()
    
    function serialize(node) { 
        if(!node) {
            arr.push('$');
            return;
        }
        arr.push(node.val);
        serialize(node.left);
        serialize(node.right);
        
    }
}
function Deserialize(s)
{
    // write code here
    var index = -1;
    var len = s.length;
    if(index >= len) {
        return null;
    }
    var arr = s.split(',');
    var head = des();
    return head
    function des() {
        index++;
        var node;
        if(arr[index] && arr[index] !== '$') {
            var temp = new TreeNode(arr[index]);
            node = temp;
            node.left = des();
            node.right = des()
        }
        return node
    }
} 