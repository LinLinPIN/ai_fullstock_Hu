function test(){
let count=0;
function help(){
    count++
    console.log(count)
}
return help
}
var c=test();
c()
c()
c()