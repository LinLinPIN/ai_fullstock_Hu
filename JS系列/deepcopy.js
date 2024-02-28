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

function deepCopy1(obj) {
    let newObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] !== 'object' || obj[key] !== null) {
                newObj[key] = obj[key];
            } else {
                newObj[key] = deepCopy(obj[key]);
            }
        }
    }
    return newObj;
}
const obj3 = deepCopy(obj)