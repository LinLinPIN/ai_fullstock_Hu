# Hooks
- 让函数组件更强大的钩子
- hooks 只能在函数组件中使用

 1. useState() 为函数组件提供状态
 2. useSEffect() 默认执行一次，当组件中有状态变化时也会重新执行一次
    可以充当componentDigMount()
    可以充当componentDigUpdate()
    可以充当componentWillUnmount()
    可以充当watch，computed

 3. useRef() 在函数组件中获取DOM结构
 4. useContext() 
      createContext()创建一个上下文对象，用于父组件提供数据，子组件通过useContext()来接受数据