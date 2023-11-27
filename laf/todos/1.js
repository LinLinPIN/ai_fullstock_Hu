// 函数修饰符 函数内部有异步操作 es7
(async function(){
    // js 弱类型的动态单线程语言 遇到异步代码放入event loop，先执行后面的代码
    // thenable    异步任务中控制执行顺序
    // fetch('https://l0qow3.laf.run/get-list')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     console.log('end');
    //     console.log('OK');
    // })
    // console.log('OK');

    // 异步变同步，有利于流程控制
    const res = await fetch('https://l0qow3.laf.run/get-list')
    const {data}= await res.json()
    console.log(data);
    console.log('ok');
})()
// await 和 async配套