window.onload=function(){
    imgLocation('container','box')
}

//获取第一行放了几张图
//操作下一张图，将其放在上一行的高度最小的列中
function imgLocation(parent,content){//当前有多少张图片要摆放
    var cparent=document.getElementById(parent)
    //cparent 中有多少个box
    var ccontent=getChildElement(cparent,content)
    //该操作第几张图
    var imgWidth=ccontent[0].offsetWidth
    var num=Math.floor(document.documentElement.clientWidth/imgWidth)
    cparent.style.width=imgWidth*num+'px'
    var boxHeightArray=[]
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
            boxHeightArray[i]=ccontent[i].offsetHeight
        }else{
            var minHeight=Math.min.apply(null,boxHeightArray)
            var minIndex=boxHeightArray.indexOf(minHeight)
            ccontent[i].style.position='absolute'
            ccontent[i].style.top=minHeight+'px'
            ccontent[i].style.left=ccontent[minIndex].offsetLeft+'px'
            boxHeightArray[minIndex]=boxHeightArray[minIndex]+ccontent[i].offsetHeight
        }
    }
}

function getChildElement(parent,content){//找到parent中所有的content
    var allContent =parent.getElementsByTagName('*')
    var contentArr=[]
    for(var i=0;i<allContent.length;i++){
        if(allContent[i].className==content){
            contentArr.push(allContent[i])
        }
    }
    return contentArr
}