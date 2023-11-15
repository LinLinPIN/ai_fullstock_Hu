let obj={
    name:'linyang',
    age:'18'
}
console.log(obj.name);
console.log(obj['name']);
obj.age=19
// obj.girlFriend='小红'
let n ='grilFriend'
// obj.n='小红'会赋值给obj.n

obj[n]='小红'
delete obj[n]
console.log(obj);