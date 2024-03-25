
function timeout(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}
timeout(1000)

class SuperTask {
    constructor(paralleCount = 2) {
        this.tasks = []
        this.paralleCount = paralleCount
        this.runningCount = 0
    }
    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this._run()
        })
    }
    _run() {// 一个任务结束后会立刻执行下一个任务
        if (this.runningCount < this.paralleCount && this.tasks.length) {
            this.runningCount++
            const { task, resolve, reject } = this.tasks.shift()// 取出第一个任务
            // 当第一个任务执行完毕，then中的第一个回调触发了，add后面then中的回调就能触发
            task().then(resolve, reject).finally(() => {
                this.runningCount--
                this._run()
            })
        }
    }
}

const supertask = new SuperTask(2)
// 向任务调度器中添加任务
function addTask(time, num) {
    supertask.add(() => timeout(time))
        .then(() => {
            console.log(`任务${num}完成`);
        })
}

addTask(10000, 1)
addTask(5000, 2)
addTask(3000, 3)
addTask(4000, 4)
addTask(5000, 5)