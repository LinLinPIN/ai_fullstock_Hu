let Parent = {
    name: 'Tom',
    friends: ['foo', 'bar', 'baz'],
    age() {
        return 18
    }
}

let child = Object.create(Parent)
let child2 = Object.create(Parent)

child.friends.push('xyz')

console.log(child2.friends);