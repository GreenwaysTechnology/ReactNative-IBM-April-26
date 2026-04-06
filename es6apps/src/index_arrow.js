
//old anonymous function
let hello = function () {
    console.log("Hello")
}
hello()
//new way of anonymous function - arrow function
let hai = () => {
    console.log("Hai")
}
hai()

let add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10,10))