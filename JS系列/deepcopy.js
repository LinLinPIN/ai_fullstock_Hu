const obj2 = structuredClone(obj)
function deepCopy(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel()// 信息管道
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            resolve(msg.data)
        }
    })
}

const obj3 = deepCopy(obj)