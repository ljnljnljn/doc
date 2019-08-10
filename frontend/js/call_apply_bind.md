
### bind call 和apply实现

```javascript

// call
Function.prototype.tempCall = function (context) {
  const context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}

// apply
Function.prototype.tempApply = function (context) {
  const context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

// bind
Function.prototype.tempBind = function (context) {
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function Convert() {
    // 判断是否是通过new调用 new F()
    if (this instanceof Convert) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```
### 总结
	bind 是通过闭包实现，闭包用处非常大，再次了解到基础的重要性[哭笑]
