function sayHello(name='Foo') {
    console.log(`Hello ${name}`)
}
sayHello('Subramanian')
sayHello()

//add
function multiply(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a * b
    console.log(`The result is ${c}`)
}
multiply(10, 10)
multiply()