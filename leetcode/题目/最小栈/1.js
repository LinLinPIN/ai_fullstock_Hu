/**
 * @func 最小栈类
 */

var MinStack = function(){
    this.stack = [];
    this.minstack = [];
}

MinStack.prototype.push = function(x){
    this.stack.push(x)
    if(this.minstack.length === 0 || x<=this.minstack[this.minstack.length-1])
    this.minstack.push(x)
}

MinStack.prototype.pop = function(){
    const x = this.stack.pop()
    if(x !== void 0 && x === this.minstack[this.minstack.length-1])
    this.minstack.pop()
}

MinStack.prototype.top = function (){
    return this.stack[this.stack.length -1]
}

MinStack.prototype.min = function(){
    return this.minstack[this.minstack.length-1]
}