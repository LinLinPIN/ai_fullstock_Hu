const ages = [32,15,19,12]
// 遍历一下 for map forEach
// 条件筛选 callback    做判断  拿符合条件的这一部分
const adultPreset = ages.some((age,index,arr) =>  age >= 18)
const allOldEnough = ages.every(age => age>=19)
const adultAges = ages.filter(age => age >= 18)
console.log(adultPreset);
console.log(allOldEnough);
console.log(adultAges);
