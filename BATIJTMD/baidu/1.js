// es6 类
// 类和对象有什么区别
// 类是抽象的，定制
// 对象是具体的
class SingleDog{
    constructor(){

    }
    // 静态属性
    // static Instance=null

    // 静态方法，属于类上的方法
    static getInstance(){
        // console.log('类的方法');
        // 返回实例
        if(!SingleDog.Instance){
            // 仅实例化一次
            SingleDog.Instance=new SingleDog()
        }
        return SingleDog.Instance
    }
    // 公有方法 属于实例上的
    show(){
        console.log('共有方法')
    }
}
// 设计模式 一个类只实例化一次 类的能力是封装
// 第一次就 new ，在内存中生成，之后就不实例化，直接返回实例
// new 角度搞不定  &{}
const s1=SingleDog.getInstance()// 生成对象 -> 拿到对象 
const s2=SingleDog.getInstance()
// 如何让他们相等
console.log(s1===s2)//false  在内存中不一样
console.log(SingleDog.getInstance());