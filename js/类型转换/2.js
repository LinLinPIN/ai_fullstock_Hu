Object.prototype.toString.call({a:1})// "[Object Object]"
console.log([]==![]);
console.log(![]);
console.log(toString(null));
console.log(toString(undefined));
console.log(Object.prototype.toString.call(null));
console.log({}.toString());
console.log([1,2,3].toString());

console.log(Number({}))// 相当于Number("[object Object]") // NaN
console.log([]);// toString('') // ''