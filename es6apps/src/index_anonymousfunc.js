//a is variable
//10 is literal
//let is keyword
let a = 10

//hello is variable
// function(){} is literal
let hello = function () {
    console.log("Hello")
}
hello()

let add = function (a = 0, b = 10) {
    return a + b
}
console.log(add(10,10))