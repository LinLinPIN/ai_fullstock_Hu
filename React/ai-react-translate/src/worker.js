import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0'
// 新的线程
// 不能做DOM编程 
// this self 
// message 监听 
// postMessage 

self.addEventListener('message', async (event) => {
    console.log(event)
    self.postMessage({
        status: 'complete',
        output: 'ddd'
    })
})