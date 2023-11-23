
function add(x,y){
    if(typeof x === 'number'&&typeof y === 'number')
    return x+y
}

// add('hello',2) 

console.log(typeof 'hello');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol(1));
console.log(typeof 123n);
console.log(typeof null);// xxxxxxxx

console.log(typeof({}));// Object
console.log(typeof([]));// Object
console.log(typeof(new Date));// Object
console.log(typeof(function(){}));// function
