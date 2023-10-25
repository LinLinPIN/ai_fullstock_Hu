//对象
var obj={
    name:'冷少',
    age:18,
    health:100,
    smoke:function(){
        obj.health--
    },
    drink:function(){
        this.health--
        //obj.health++同义
    }
}
obj.girlFriend='刘亦菲'//对象内有就是修改girlFriend的值，没有就是增加

delete obj.girlFriend

obj.somke()//调用smoke函数