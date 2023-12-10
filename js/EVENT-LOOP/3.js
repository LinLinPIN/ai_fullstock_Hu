console.log('start');
async function async1(){
    await async2() // 浏览器给await开小灶 提前执行
    console.log('async1 end');// 被await挤入微任务队列
}
async function async2(){
    console.log('async2 end');
}
async1()
setTimeout(function (){
    console.log('setTimeout');
},0)
new Promise((resolve)=>{
    console.log('promise');
    resolve()
})
.then(()=>{
    console.log("then1");
})
.then(()=>{
    console.log("then2");
})
console.log('end');