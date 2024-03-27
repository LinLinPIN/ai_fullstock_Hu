function a() {
    setTimeout(() => {
        console.log('a');
    }, 1000);
}

function b() {
    console.log('b');
}

function* foo() {
    yield a()
    b()
}

let gen = foo()

console.log(gen.next())