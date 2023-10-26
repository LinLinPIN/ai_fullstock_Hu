//工具函数
var baseObj={
    //随机数
    randomNum:function(min,max){
        return parseInt(Math.random()*(max-min)+min)
    },

    //检测两个矩形是否碰撞
    rectangleCrashExamine:function(obj1,obj2){
        var obj1Left=obj.offsetLeft
        var obj1Width=obj.offsetLeft+obj1.offsetwidth
        var obj1Top=obj1.offsetTop
        var obj1Height=obj1.offsetTop+obj1.offsetHeight

        var obj2Left=obj.offsetLeft
        var obj2Width=obj.offsetLeft+obj2.offsetwidth
        var obj2Top=obj2.offsetTop
        var obj2Height=obj2.offsetTop+obj2.offsetHeight

        if(!(obj1Left>obj2Width||obj1Width<obj2Left||obj1Top>obj2Height||obj1Height<obj2Top))//所有没撞上的情况
        return true
    return false
    }
}
