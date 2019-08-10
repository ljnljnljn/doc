//  题目：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型
function Stack() {
    var item = [];
    this.push = function (node){
        item.push(node);
    };
    this.pop = function (){
        return item.pop();
    }
    this.isEmpty = function (){
        return item.length === 0;
    }
}
 
var stack1 = new Stack();
var stack2 = new Stack();
 
function push(node) {
    stack1.push(node);
}
function pop() {
    if(stack1.isEmpty() && stack2.isEmpty()){
        throw new Error("Queue is empty");
    }
    if(stack2.isEmpty()){
       while(!stack1.isEmpty()){
           stack2.push(stack1.pop());
       }
    }
    return stack2.pop();
}