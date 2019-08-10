var stack = []
function push(node)
{
    // write code here
    stack.push(node)
}
function pop()
{
    // write code here
    stack.pop()
}
function top()
{
    // write code here
    return stack[0]
}
function min()
{
    // write code here
    return Math.min.apply(this, stack)
    // return Math.min.call(this, ...stack);
}