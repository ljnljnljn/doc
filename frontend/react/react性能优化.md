## React 性能优化
### 前提
总结一下之前用到的 React 性能优化的方法
### 代码层面
#### shouldComponentUpdate

当一个组件的props或者自身state状态改变时， React 默认会更新DOM，在一些情况下，业务组件可以通过 shouldComponentUpdate 生命周期来避免一些不必要的渲染，其生命周期默认返回 tru额，使React执行更新；

在一些场景下，props或者state改变不需要组件更新，可以通过 shouldComponentUpdate 加一层判断，屏蔽掉之后的生命周期,例如
```javascript
shouldComponentUpdate(nextProps, nextState) {
    if (this.props.params !== nextProps.params) {
      return true;
    }
    return false;
  }
```
#### pureComponent

shouldComponentUpdate 只检查特定书写的props state的变化。如果这些值没有变化，组件就不会更新。当组件变得更加复杂时，这种模式十分常见，React.PureComponent可使用类似shouldComponentUpdate 的模式做一个浅比较，用来判断是否更新组件。
```javascript
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```
大部分情况下，可以使用React.PureComponent而不必写自己的shouldComponentUpdate，它只做一个浅比较。但是由于浅比较，state/props是嵌套较深或者数组之类的，当state/props改变，可能不会触发DOM更新，例如以下代码；
```javascript
  handleClick() {
    // This section is bad style and causes a bug
    const obj = this.state.obj;
    obj.item = 'newItem';
    this.setState({obj});
  }
```
#### immutable
　　Immutable.js 与 React 结合是可以解决上述问题。它通过结构共享提供不可突变的，持久的集合

	1、不可突变；
	2、持久性；
	3、结构共享；
  如下代码
```javascript
const NewObj = Immutable.Record({ age: 18 });
const xiaohua = new NewObj({ age: 19 });
const xiaozhang = xiaohua.set(name, 'xiaozhang');
xiaohua === xiaozhang; // false
```
当修改 xiaohua之后，返回了一个新的索引，这样xiaohua和xiaozhang便是两个不同的对象；

immutable 和 React 理念一致，immutable可以帮助我们追踪数据变化。结合 pureComponent/shouldComponentUpdate 可以避免一些不必要的渲染。

#### 设置key

key的作用是在更新组件的时候判断两个节点是否相同，若是相同就复用，不相同就删除旧节点创建新节点

我们在希望发生重新渲染的 DOM 上设置同级唯一 key 以触发重新渲染，而避免不必要的深度比较，（因为不设置key 新旧两个key值undefined，可以判定相等， 若是判断为sameVnode，则会DFS进行比较）正式因为带唯一key，每次更新都会直接触发重新渲染，省去不必要的比较。列表循环中假如用index作为key，每个列表选项在数据变更前后的key值是一样的，可以直接判定为sameVnode然后进行复用等操作。

#### 利用全局实例

将一些展示性的数据直接挂载到全局this实例上面，避免使用state存放数据，
### 构建层面
#### 代码分割
React 16.6添加了一个新的特性: React.lazy(），这样可以更好的代码分割

在写业务组件时，经常会往里面加一些dialog弹窗组件，这些dialog弹窗组件大小（依赖 + 代码）比较大，我们想要尽快展示业务组件，而浏览器需要等待dialog弹窗一起加载完成之后才进行展示，

我们可以通过ES6的动态import将打包的代码拆分成两部分，React.lazy(）可以方便的异步引用组件

```javascript
const Dialog = React.lazy(() => {
	import(/*webpackChunkName: dialogChunk*/, './Dialog')
})
 <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Item
          stocks={stocks}
          onOk={() => this.setState({ openDialog: true })}
          onClose={() => this.setState({ openDialog: false })}
          />
        {openDialog && (
          <Dialog
            onClose={() => this.setState({ openDialog: false })}
          />
        )}
      </React.Fragment>
</React.Suspense>
```

在lazy()传入动态import，在函数中动态引入Dialog组件。这样在我们渲染这个组件前，浏览器将不会下载./Dialog.jsx文件和它的依赖。
添加了<React.Suspense/>后，如果 React 要渲染 <Dialog /> 组件时，组件依赖的代码还没下载好，它将会渲染fallback属性传入的值，当全部子节点依赖的代码都准备好后，才会去渲染子节点内容。


如果我们不想看到经常看到Loading组件，我们还可以利用预渲染的原理
```javascript
const asyncDialog = import("./Dialog");
const Dialog = React.lazy(() => asyncDialog);
```
当我们调用dynamic imoprt时，组件就会开始加载，并且它不会阻塞<Item />业务组件的加载。这样当点击出弹窗的时候，说不定弹窗组件已经加载好，这样就不会出现Loading组件了。

我们还可以将预加载抽离出一种方法，这样的话代码会更加优美；

#### 按需加载依赖
一些依赖的UI库，比如Element UI， AntD等，其采用ES6模块化思想，这样可以结合 wepack 配置，做到按需加载，减少代码大小，加快页面渲染速度，优化整体性能。

### 总结

个人觉得React性能优化是还是挺复杂的一项工作，不仅仅需要良好的代码习惯，也需要对前沿知识保持敏锐，因为技术进步，可能会解决掉之前遗留的问题。

