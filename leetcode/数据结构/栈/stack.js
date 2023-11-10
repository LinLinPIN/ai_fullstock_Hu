var stack=[]//只有push和pop方法的数组

stack.push('东北大板')
while(stack.length){
    const top=stack[stack.length-1]
    console.log(top);
    stack.pop();
}