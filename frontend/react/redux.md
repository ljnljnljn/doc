### Redux
redux遵守Flux设计模式，统一维护并管理应用状态，redux和react其实关系不大，redux可以用到其他框架里做数据管理，可以用于其他UI库；
#### 主要核心
##### action
一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性：{type: '类型',payload: 'params'}
##### reducer
一个纯函数，tore 收到 action 以后，必须给出一个新的state,从而导致UI实图层的变化，reducer 是一个函数，它接受action和当前state作为参数，返回一个新的state。
##### store 
sore相当于一个容器，管理并保存数据，通过createStore(reducer)返回一组对象subscribe（订阅store的变更）,dispatch（更新状态）,getState（获取当前状态）,来实现相应的功能。
#### redux 异步
由于redux对所有store的变更都需要通过action触发，异步操作至少要送出两个 Action：用户触发第一个 Action，结束操作需要送出一个action，这样就需要用到一些中间件例如 redux-thunk 等配合异步流程管理；而这些中间件让redux可扩展性增强。自己也可以开发想用的中间件

#### 简单实现

```javascript
function createStore(reducer, initState) {
    let state = initState;
    const listeners = [];
    function subscribe(listener) {
      listeners.push(listener);
    }

    function dispatch(action) {
      state = reducer(state, action);
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener();
      }
    }

    function getState() {
      return state;
    }
    return {
      subscribe,
      dispatch,
      getState,
    };
  }

 // combineReducers 的写法规定是state的属性名必须与子reducer同名，如果不同命，需要采用key-value写法
//  其产生了一个整体的reducer函数，该函数根据state的key去执行相应的子reducer，并将返回结果合并成一个大的state对象
 function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    return function combination(state = {}, action) {
      const nextState = {};
      for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i];
        const reducer = reducers[key];
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey, action);
        nextState[key] = nextStateForKey;
      }
      return nextState;
    };
}

// 第二种
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key],action)
    }, {})
  }
}
```

#### 总结
	store 由 Redux 的 createStore(reducer) 生成
	state 通过 store.getState() 获取，本质上一般是一个存储着整个应用状态的对象
	action 本质上是一个包含 type 属性的普通对象，由 Action Creator (函数) 产生
	改变 state 必须 dispatch 一个 action
	reducer 本质上是根据 action.type 来更新 state 并返回 nextState 的纯函数，其是幂等的，换句话说，state 就是所有 reducer 返回值的汇总
	reducer 必须返回值，否则 nextState 即为 undefined
```javascript
Action Creator => action => store.dispatch(action) => reducer(state, action) => nextState
```
