### Vue 响应式

Vue的一个特点便是响应式，实现数据和UI视图的双向绑定。Vue2.x版本的响应式原理依赖于Object.defineProperty，
（ps：Vue3.0以上版本将API换成 ES6 的 Proxy，从而返回代理的完整对象，而不是去劫持对象属性）
#### Vue init阶段
直接贴代码：
```javascript
vm._self = vm
initLifecycle(vm)
initEvents(vm)
initRender(vm)
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
// 在init阶段，Vue构造函数会执行一系列的init初始化，与响应式有关的便是 initState
initState(vm)
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```
#### initState
initState中会初始化Vue对象定义的props methods data computed watch（较为特别）属性

```javascript
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```
#### initData
首先判断是否有重复定义，再次通过proxy方法，将定义的data可以通过this.key直接访问到，最重要的是里面的observe方法。
```javascript
function initData (vm: Component) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
  // proxy data on instance
  const keys = Object.keys(data)
  const props = vm.$options.props
  const methods = vm.$options.methods
  let i = keys.length
  // 循环查看是否有重复定义
  while (i--) {
    const key = keys[i]
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          `Method "${key}" has already been defined as a data property.`,
          vm
        )
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    } else if (!isReserved(key)) {
      proxy(vm, `_data`, key)
    }
  }
  // observe data
  observe(data, true /* asRootData */)
}
```
#### observe
调用observe方法，实例化一个 Observer 对象（传入data），Observer 会判断data为对象还是数组，若是对象通过 walk 方法来遍历，调用defineReactive
```javascript
export function observe (value: any, asRootData: ?boolean): Observer | void {
    ob = new Observer(value)
  }
  if (asRootData && ob) {
    ob.vmCount++
  }
  return ob
}

export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that have this object as root $data

  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
   walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}
```
#### defineReactive
Vue响应式的核心便是 defineReactive，而 defineReactive 的核心便是Object.defineProperty。如下
```javascript
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```
由于定义的data属性可能在UI视图中用不到，Vue在利用Object.defineProperty劫持对象时做了一层优化，便是依赖收集和派发更新。
#### 依赖收集
依赖收集的核心就在 getter 中的 Dep 闭包，而dep是否收集相关依赖在于target属性，target属性便是全局 Watcher 实例，Dep不能脱离 Watcher单独存在
```javascript
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

class Watcher {
    constructor (vm, expOrFn, cb, options) {
        this.cb = cb;
        this.vm = vm;
        Dep.target = this;
        this.cb.call(this.vm);
    }
    update () {
        this.cb.call(this.vm);
    }
}
```
依赖收集的过程就是将Watcher实例赋值给全局的target属性，Vue渲染过程中，只有被target标记过的对象属性，才会将对应的 Watcher 压入 Deps。
派发更新：当数据修改触发setter时， deps会触发notify方法，通知wtacher去重新rerender，在这其中Vue做了许多优化，比如nextTick，合并一些不必要的更新等等，
#### Array
	Vue2.x版本通过非常hack的方式来实现数组响应式，便是改写数组以下原生方法，push,pop,shift,unshift,splice,sort,reverse，还是有一个缺陷，那就是仍不能通过下标直接修改数组，这样不会触发响应式
### 总结
	Vue中依赖收集和派发更新是 观察者 设计模式的实现，对于设计模式，本人觉得应该去理解些设计模式。
	3.0版本用Proxy来代替，解决了数组hack的方法，返回整个对象，而不是劫持属性，技术不断发展，保持学习力对个人来说还是挺重要的。
