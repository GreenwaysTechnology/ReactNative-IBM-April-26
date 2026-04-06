
//a=x,b=y
function add(a, b) {
    return a + b
}
console.log(add(10, 10)) //passing values directly
let x = 10
let y = 90
console.log(add(x, y)) //passing values via variables

//a  = users
function fetch(a) {
    a()
}
//variable holding function and passed as paraemeter
let users = function () {
    console.log('users function')
}
fetch(users) //passing values via variables
fetch(function () {
    console.log('users anonymous')
})
////////////////////////////////////////////////////////////////////////////////////

function getValue(cb) {
    let result = cb(10, 10)
    console.log(`Result is ${result}`)
}
getValue(function (value1, value2) {
    console.log(`Values are ${value1} ${value2}`)
    return value1 * value2
})
function login(userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})











