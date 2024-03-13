function observe(obj) {
    new Observer(obj)
}

class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }

    walk(obj) {
        Object.keys(obj).forEach((key) => {
            defineReactive(obj, key, obj[key])
        })

    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        get() {
            dep.addDep(Dep.target) // 谁用到了这个key就收集谁
            return val
        },
        set(newVal) {
            if (val === newVal) return
            // 修改obj.key
            // 触发依赖
            dep.notify() // 通知watcher触发依赖

        }
    })
}

class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el) // '#app'
        if (this.$el) {
            this.compile()
        }
    }
    compile(el) {
        const childNodes = el.childNodes
        Array.from(childNodes).forEach((node) => {
            if (this.isElement(node)) {// 是否是一个节点
                console.log('编译该元素' + node.nodeName);
            } else if (this.isInterpolation()) {
                console.log('编译文本' + node.textContent);
            }
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }

        })
    }
    isElement(node) {
        return node.nodeType === 1
    }
    isInterpolation(node) {
        return node.nodeType === 3
    }
}

class Dep {
    constructor() {
        this.deps = []// 存放一个个的watcher实例
    }

    addDep(dep) {
        this.deps.push(dep)
    }
    notify() {
        this.deps.forEach(dep => dep.update)
    }
}

class Watcher {// 统一调配任务 每一个watcher就是一个依赖
    constructor(vm, key, updater) {
        this.vm = vm
        this.key = key
        this.updaterFn = updater
        Dep.target = null
        vm[key]
        Dep.target = this
    }
    update() { // 更新视图
        this.updaterFn.call(this.vm, this.vm[this.key])
    }

}

class Vue {

    constructor(options) {
        this.$options = options
        this.$data = options.data()

        observe(this.$data)// 将this.$data变成响应式

        proxy(this)// 将data代理到this上

        new Compile(options.el, this)
    }

}

new Vue({
    el: '#app',
    data() {
        return {}
    },
    methods: {

    }
})