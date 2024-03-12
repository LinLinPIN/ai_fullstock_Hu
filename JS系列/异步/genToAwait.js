
function* gen() { }
function generatorToAwait(generatorFn) {
    return function () {
        const g = generatorFn()
        return new Promise(function (resolve, reject) {
            function loop(key, arg) {
                const { value, done } = g[key](arg)
                if (done) {
                    return resolve(value)
                } else {
                    // Promise.resolve(value)保证value对象中的状态一定是fullfilled
                    Promise.resolve(value).then((val) => { loop('next', val) })
                }
            }
            loop('next')
        })
    }
}

let asyncFn = generatorToAwait(gen)

asyncFn()