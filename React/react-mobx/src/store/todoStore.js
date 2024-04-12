import { makeAutoObservable } from "mobx"
let flag = false
class TodoStore {
  list = [
    { id: 1, name: '学习react', isDone: true },
    { id: 2, name: '学习mobx', isDone: false },
  ]
  constructor() {
    makeAutoObservable(this)
  }

  checkItem(id) {
    this.list[id - 1].isDone = !this.list[id - 1].isDone
    console.log(this.list[id - 1].isDone);
  }
  delItem(id) {
    console.log(id);
    this.list.splice(id - 1, 1)
  }
  checkAll() {
    flag = !flag
    this.list.map(item => {
      item.isDone = flag
    })
  }
  addItem(val) {
    this.list.push({
      id: this.list.length + 1,
      name: val,
      isDone: false
    })
  }
}
const todoStore = new TodoStore()
export default todoStore