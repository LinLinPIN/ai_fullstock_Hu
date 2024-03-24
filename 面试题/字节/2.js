let a = 2 * 53
let b = 7000000

function sum(a, b) {
    a = a.toString()
    b = b.toString()
    let carry = 0
    let result = ''
    const len = Math.max(a.length, b.length)
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')
    for (let i = len - 1; i >= 0; i--) {
        const n = +a[i] + +b[i] + carry
        carry = Math.floor(n / 10)
        result = (n % 10) + result
    }
    if (carry) {
        result = carry + result
    }

}

console.log(sum(a, b));