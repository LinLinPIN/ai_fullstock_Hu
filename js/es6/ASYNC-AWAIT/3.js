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

// async === return new Promise((resolve,reject)=>{})
async function foo(){
    await xq()
    await marry()
    baby()
}
foo()