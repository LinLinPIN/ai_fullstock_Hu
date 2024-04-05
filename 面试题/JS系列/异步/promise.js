const { resolve } = require("path")

class myPromise {
    constructor(executor) {
        this.state = 'pending'// fulfilled  rejected
        this.value = undefined
        this.reason = undefined
        this.onFullfilledCallback = []// then的回调
        this.onRejectedCallback = []//  
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                // then的回调在这里触发
                this.onFullfilledCallback.forEach(callback => callback(value))
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallback.forEach(callback => callback(reason))
            }

        }
        executor(resolve, reject)

    }
    then(onFullfilled, onRejected) {
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        const newPromise = new myPromise((resolve, reject) => {
            // 考虑onFullfilled,onRejected
            if (this.state === 'fulfilled') {// then前面的对象状态已经变更
                setTimeout(() => {// 模拟异步但是模拟不了微任务
                    try {
                        const result = onFullfilled(this.value)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                });
            }
            if (this.state === 'rejected') {
                setTimeout(() => {// 模拟异步但是模拟不了微任务
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                });
            }
            if (this.state === 'pending') {
                this.onFullfilledCallback.push((value) => {
                    setTimeout(() => {
                        try {
                            const result = onFullfilled(value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    });
                })
                this.onRejectedCallback.push((reason) => {
                    setTimeout(() => {
                        try {
                            const result = onRejected(reason)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    });
                })
            }
        })
        return newPromise
    }

    catch(onRejected) {
        this.then(null, onRejected)
    }
    // static 类中的静态方法，只能被类访问不能被实例对象访问
    // race 只找最快的，无论是resolve和rejected都只取最快的一个
    static race(promises) {
        return new myPromise((resolve, reject) => {
            promises.forEach(promise => {
                // promise的状态是不是fulfilled
                promise.then((value) => {
                    resolve(value)
                }, (reason) => {
                    reject(reason)
                })
            })
        })
    }

    static all(promises) {

    }
}