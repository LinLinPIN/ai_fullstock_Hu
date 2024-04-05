const { log } = require("console");

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            reject('no')
        }, 1000);
    })

}

// reject 人为抛出错误不会进行下一步
function b() {
    console.log('b');
}

a().then(() => {
    b()
    // }, (err) => {
    //     console.log(err);
}).catch((err) => {
    console.log(err);
})
// .then第一个回调接受resolve第二个回调等同于catch捕获异常