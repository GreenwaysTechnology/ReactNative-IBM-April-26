
function sayHello(name = 'Foo') {
    return name
}
let name = sayHello('Subramanian Murugan')
console.log(name)
name = sayHello()
console.log(name)

function multiply(a = 0, b = 0) {
    return a * b
}
console.log(multiply(10,10))
console.log(multiply())