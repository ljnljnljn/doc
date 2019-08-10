### Promise.all hack
Promise.all 有一个缺陷，是如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。这样整个请求会中断，
##### Promise.wait
个人实现了一个hack，当list中所有promise全部为非pending状态时，自身进入fullfilled/rejected状态，自身进入状态判断的依据是list所有的promise均为fullfilled，返回fullfilled状态，只要有一个为rejected，整体返回rejected状态，并会带上fullfilled promise返回的res；

```javascript
Promise.wait = function (promises) {
    return new Promise(function (resolve, reject) {
        let fullFilledArr = []
        let rejectedArr = []
        let i = 0
        let flag = false
        function resloveData(index, value) {
            fullFilledArr[index] = value
            rejectedArr[index] = undefined
            if (++i === promises.length) {
                if(!flag) {
                    resolve(fullFilledArr)
                }else {
                    reject(rejectedArr)
                }   
            }
        }

        function rejectData(index, reason) {
            rejectedArr[index] = reason
            fullFilledArr[index] = undefined
            flag = true
            if (++i === promises.length) {
                reject(rejectedArr);
            }
        }

        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function (value) {
                resloveData(i, value)
            }, function(reason) {
                rejectData(i, reason)
            })
        }
    })
}
```
