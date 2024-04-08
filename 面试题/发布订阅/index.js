// 发布订阅一对多
class EventEmitter {
    constructor() {
        this.handles = {}
    }
    on(eventName, cb) {
        if (!this.handles[eventName]) this.handles[eventName] = []
        this.handles[eventName].push(cb)
    }
    off(eventName, cb) {
        const handle = this.handles[eventName]
        const index = handle.indexOf(cb)
        if (index !== -1) this.handles.splice(index, 1)
    }
    once(eventName, cb) {
        if (this.handles[eventName] && this.handles[eventName].indexOf(cb) !== -1) {
            return
        }
        this.on(eventName, cb)
    }
}

const emiter = new EventEmitter()// 发布器
const emiter2 = new EventEmitter()// 发布器

emiter.on('onSell', () => {
    console.log('万总去买房');
})
emiter.once('onSell', () => {
    console.log('万总去买房');
})
emiter.on('onSell', () => {
    console.log('万总去买房2');
})
emiter.on('onSell', () => {
    console.log('吴总去买房');
})
emiter.off('onSell', () => {
    console.log('万总去买房');
})
setTimeout(() => {
    emiter.emit('onSell')
}, 2000);