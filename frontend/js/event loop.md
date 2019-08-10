## 浏览器的Event Loop
由于JavaScript是单线程的（因为JS需要操作DOM），需要event loop机制来保证主线程不至于阻塞；
##### 任务分类
	JS中最常见的任务是异步任务和同步任务，
	同步任务会在按照先进后出的函数执行栈等待主线程调用，
	API注册的异步任务当到一定触发点时候，会将注册的 function 推入对应的任务队列中，等待进入函数执行栈；
##### 任务队列分类
	task：一些异步任务的回调函数会被推入task队列中，其中有：
		setTimeout/setInterval，script，setImmediate等
	microtask：一些异步任务的回调函数会被推入microtask队列中，其中有
		promise.then，process.nextTick，MutationObserver等
event执行流程

	1. 全局script代码属于task，当请求JS资源到达后，JS执行栈为空，便会将script入栈，执行，script里面会有一些异步和同步任务，在执行过程中，不同API注册的异步回调将会在有结果的时候，分别进入对应的队列
	2. 执行完script代码之后，执行栈为空，如果 microtask 不为空，则会将 microtask 里面的回调以此执行，直至清空；
	3. 此时 microtask 为空，执行栈也为空
	4. 继续取出task队列里面的任务放入执行栈中；
	......
最常见的例子：
```javascript
console.log(1)

setTimeout(() => {
    console.log(2)
    new Promise(resolve => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
})

new Promise(resolve => {
    console.log(7)
    resolve()
}).then(() => {
    console.log(8)
})

setTimeout(() => {
    console.log(9)
    new Promise(resolve => {
        console.log(11)
        resolve()
    }).then(() => {
        console.log(12)
    })
})
```
在node和浏览器中输出会有些许差异。


#### Node的Event Loop
Node的Event Loop分为6个阶段，他们会按照顺序反复运行，每当进入某一个阶段时候都会从对应的回调队列中取出函数去执行，当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段，在进入下一个阶段之前都会优先清空process.nextTick注册的函数，然后清空microtask；
##### 六个不同的阶段
	timer阶段： timers 阶段会执行 setTimeout 和 setInterval 回调，并且是由 poll 阶段控制的。
	I/O阶段： I/O 阶段会处理一些上一轮循环中的少数未执行的 I/O 回调
	idle, prepare阶段： 会处理内部的一些回调
	poll: 是Node中最重要的阶段，在这一个阶段系统会做：
		1. 回到timer阶段执行回调
		2. 处理poll队列里的事件
	当事件循环进入poll阶段时：
		poll队列不为空时候，事件循环肯定先遍历并同步执行回调，知道队列清空或者执行回调数达到系统上限
		poll队列为空时候，分以下两种：
			1. 如果代码已经被setImmediate()设定了回调，那么事件循环直接结束poll阶段进入check阶段来执行check队列里的回调。
			2. 如果代码没有被设定setImmediate()设定回调：
				1). 如果有被设定的timers，那么此时事件循环会检查timers，如果有一个或多个timers下限时间已经到达，那么事件循环将绕回timers阶段，并执行timers的有效回调队列。
				2). 如果没有被设定timers，这个时候事件循环是阻塞在poll阶段等待回调被加入poll队列。
	check阶段：会执行setImmediate，在poll阶段结束后立即执行回调，如果poll阶段空闲，且有setImmediate设定的回调，那么事件循环直接跳到check阶段执行而不是阻塞在poll等待回调被加入
如下代码
```javascript
setTimeout(() => {
	setImmediate(() => {
		console.log('setImmediate');
	});
	setTimeout(() => {
		console.log('setTimeout');
	}, 0);
}, 0)
```

如果 setTimeout 和 setImmediate 两者都在主模块中调用，那么执行先后取决于进程性能，也就是随机。
如果两者都不在主模块调用（被一个异步操作包裹），那么setImmediate的回调永远先执行。


（ps: node10以后，在执行完一个task任务后，就会清空microtask，和浏览器保持一致。)
