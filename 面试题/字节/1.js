let obj = {
    a: 1,
    b: undefined,
    c: {
        n: 2
    }
}

function hasProperty(obj, key) {
    // return obj[key] !== undefined
    // return Object.keys(obj).includes(key) 
    // return obj.hasOwnProperty(key)
    // return key in obj
}

hasProperty(obj, 'a')