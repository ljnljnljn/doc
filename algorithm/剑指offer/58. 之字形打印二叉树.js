// 题目：请实现一个函数按照之字形打印二叉树，
// 即第一行按照从左到右的顺序打印，
// 第二层按照从右至左的顺序打印，
// 第三行按照从左到右的顺序打印，其他行以此类推。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 加一个标记位，来对从左到右的判断
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let res = [], flag = false, queue = [];
    queue.push(pRoot);
    while(queue.length) {
        let tempArr = [], len = queue.length;
        for(let i = 0; i < len; i++) {
            let temp = queue.shift();
            tempArr.push(temp.val);
            if(temp.left) queue.push(temp.left);
            if(temp.right) queue.push(temp.right);
        }
        if(flag) {
            tempArr.reverse()
        }
        res.push(tempArr)
        flag = !flag
    }
    return res
}

console.log(Array.from([1, , 2, , 3], (n) => n || 0))
// [1, 0, 2, 0, 3]

const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

console.log(myObject)


let obj = {
    'a': 1,
    'b': 2,
    "c": 3
}

console.log(Object.keys(obj), Object.getOwnPropertyNames(obj), Object.getPrototypeOf(obj))


const proto = {
    foo: 'hello'
};
  
const obj1 = {
    foo: 'world',
    find() {
        return super.foo;
    }
};
  
Object.setPrototypeOf(obj1, proto);
console.log(obj1.find()) 
