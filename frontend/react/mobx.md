### Mobx
项目组用的 React + mobX 技术栈，本人对 mobX 的学习做了一个总结
#### Mobx概念
mobX官网介绍：通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展，其核心思想是通过action触发state的变化，从而触发state的衍生对象Computed Values Reactions的变化，
其主要有四个概念：

	Observable State
	Computed Values
	Reactions
	Actions
##### state
state对应应用原始状态，通过observable响应式让数据变成响应式，通常为了支持响应式，会将Object, Array, Map三类进行改写，比如 不同于Vue中重写数组原生方法而实现响应式，mobX直接用类数组对象来模拟数组从而实现数组响应式。可以通过原生的Mobx.toJS将其转换成原生数据结构。
```javascript
const Mobx = require("mobx");
const { observable, autorun } = Mobx;
const obArray = observable(['a', 'b', 'c']);
console.log(Array.isArray(obArray)) // false
console.log(Array.isArray(Mobx.toJS(obArray))) // true;
```
#### computed
为了不让state过于重，一些依赖于state的数据可以通过computed来生成，（个人觉得有点像Vue中的computed属性，而且不管是Vuex，Redux还是mobX,都是希望保证state尽可能的小，这样维护起来也比较方便），在日常使用中尽可能的用computed.如果computed依赖的state没改变，或者该计算值没有被其他响应（reaction）使用，computed便不会运行(有点像依赖收集)。在这种情况下，computed处于暂停状态，此时若该计算属性不再被observable。那么其便会被Mobx垃圾回收。
```javascript
const Mobx = require("mobx");
const { observable, autorun, computed } = Mobx;
var array = observable(['a', 'b', 'c']);
var sum = computed(() => array.length);
autorun(() => console.log(sum.get()));
numbers.push('d');// 4
```
#### action
在redux或者Vuex中，唯一可以更改state的途径便是dispatch一个action/commit一个mutation。这种约束性，让代码更好维护
但Mobx不强制所有state的改变必须通过action来改变，这主要适用于一些较小的项目。但是对于项目规模较大的，个人建议还是通过api规范一下只能使用action来改变state
```javascript
Mobx.configure({enforceActions: true})
```
#### mobX异步：
mobX异步处理相对来说比较简单，不需要额外引入中间件，当响应回来之后，直接触发action就可以，但在严格模式下，对于异步action里的回调，若该回调要修改state的值，那么该回调也需要绑定action
```javascript
class Store {
  @observable stud = {
	name:'jack',
	age: 18,
  }

  @action
  changeA() {
    this.stud.age++;
    setTimeout(this.changeName, 0);
  }
  @action.bound
  changeName() {
    this.stud.name = 'rose';
  }
}
```
也可以用 runInAction
 ```javascript
class MyState {
  @observable data = null;
  @action initData = async() => {
    const data = await getData("xxx");
    runInAction("callback", () => {
      this.data = data;
    })
  };
}
```
通过mobx-react与react进行结合
 ```javascript
import React from 'react';
import { observable, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
useStrict(true);

class State {
  @observable num = 0;
  @action add = () => {
    this.num++;
  };
}

const store = new State();

@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>{store.num}</p>
        <button onClick={store.add}>+1</button>
      </div>
    )
  }
}
```
### 总结
mobX上手容易，简单，但是将大部分例如优化，数据追踪等都隐藏起来了，应该深入了解其原理和基础，要不只是停留在会用的阶段，而且每个框架都有自己的特色，有自己适用的范围。


