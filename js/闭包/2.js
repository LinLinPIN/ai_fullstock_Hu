function foo(){
    var myName='Hu'
    let test1 = 1
    const test2 = 2
    var innerBar={
        getName:function(){
            console.log(test1)
            return myName
        },
        setName:function(newName){
            myName=newName
        }
    }
    return innerBar
}
var bar=foo()//foo执行完在调用栈被销毁，同时在相同位置生成一个闭包
bar.setName('Yang')
console.log(bar.getName());