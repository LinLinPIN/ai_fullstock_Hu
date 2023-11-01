/**
 * @func 获得文章的点赞描述
 * @params {Array}names 点赞的人的名字数组
 * @return {string}描述
 * @author  
 */

//驼峰命名法，强调可读性
function getPostLikes(names){
    switch(names.length){
        case 0:
            return '暂无人点赞';
        case 1:
            return '${names[0]}点赞了这篇文章';
        case 2:
            return '${names[0]}和${names[1]}点赞了这篇文章';
        case 3:
            return '${names[0]}、${names[1]}和${names[2]}点赞了这篇文章';
        default:
            return '${names[0]}、${names[1]}和${names.length-2}点赞了这篇文章';
    }
}
console.log(getPostLikes(['甲','乙']));