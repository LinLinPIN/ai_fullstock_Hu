function xq(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('相亲'); 
            resolve('相亲成功')
        },2000)
    })
}

function marry(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('结婚'); 
        resolve()
    },1000)
    })
}

function baby(){
    console.log('baby');
}

xq()
.then((res)=>{// then 自己就会返回一个Promise对象
    console.log(res);
    return marry()
})
.then(()=>{
    baby()
})