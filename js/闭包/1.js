var arr=[]
for(let i=0;i<10;i++){
    // function help(j){
    //     arr[j]=function(){
    //         console.log(j);
    //     }}
    //     help(i)
    (function(j){
        arr[j]=function(){
            console.log(j)
        }
    })(i)}//自执行函数()()        (函数)(传入的实参)

for(var j=0;j<arr.length;j++){
    arr[j]()
}