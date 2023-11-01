/**
 * @func 获得文章的点赞描述
 * @params {Array}names 点赞的人的名字数组
 * @return {string}描述
 * @author  
 */

//驼峰命名法，强调可读性
function getPostLikes(names){
    // js var let const
    const templates=[
        '暂无人点赞',
        '{name}点赞了这篇文章',
        '{name}和{name}点赞了这篇文章',
        '{name}、{name}和{name}点赞了这篇文章',
        '{name}、{name}和{n}个人点赞了这篇文章'
]
    let idx=Math.min(names.length,4);//0,1,2,3,4
    //用户数量对应的模板
    //正则表达式 规格/规则/
    //g 修饰符 全局 匹配
    return templates[idx].replace(/{name}|{n}/g,function(val){
        return val === "{name}" ? names.shift():names.length;
    })
}
console.log(getPostLikes(['甲','乙','丙','丁']));