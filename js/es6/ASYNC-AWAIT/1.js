function a(cb){
    setTimeout(()=>{
        console.log('A'); 
        cb()// 回调
    },1000)
}

function b(){
    setTimeout(()=>{
        console.log('B');
    },500)
}

a(b)
