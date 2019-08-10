### Vdom
因为各个浏览器有各种标准，加上原生DOM一系列操作方法属性，让原生DOM看起来很重。在vdom概念没引入之前的时代，大家不得不去操纵原生DOM去更新视图，这样带来一些坏处，个人觉得有两个：1. 不断操作DOM，可能会让页面变得很慢，2. 需要不断想浏览器兼容的事情，Jquery应该解决了部分问题。
而Vdom利用原生javascript对象去描述DOM，如下代码
```javascript
export default class VNode {
  tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  devtoolsMeta: ?Object; // used to store functional render context for devtools
  fnScopeId: ?string; // functional scope id support

  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.fnContext = undefined
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key
    this.componentOptions = componentOptions
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }
}
```
这样带来两个好处：

	1. 由于JS描述DOM相对于原生DOM来说轻很多，加上patch和diff算法，让更改UI视图变得轻量和简单
	2. JS不光局限于浏览器，引入vdom后，具有了一个跨平台的效果，只要根据vdom去操作相应平台的api，便可以在不同平台中做一些事情。
#### 总结
	vdom主要是标签名、数据、子节点、键值，其余内容都是扩展一些特性。其是一种数据结构的定义，patch diff是相关算法的应用，个人觉得很多很厉害的新技术，抽离出来，其基础也是相关算法数据结构搭建而来。基础还是非常重要[哭笑]
