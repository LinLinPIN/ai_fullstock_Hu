// let obj={
//     name:'成总',
//     say:function(){
//         console.log(this.name);// say这个function的作用域
//     }
// }
// obj.say()


// function foo(){
//     var a=1;
//     console.log(this);// window
// }
// foo()

// function identify(){
//     return this.name.toUpperCase()
// }
// function speek(){
    console.log("Hello,i'm ");
// }



let obj={
    this:this
}