//a  = users
const fetch = a => a()
//variable holding function and passed as paraemeter
let users = () => console.log('users function')
fetch(users) //passing values via variables
fetch(() => console.log('users anonymous'))
////////////////////////////////////////////////////////////////////////////////////

const getValue = (cb) => {
    let result = cb(10, 10)
    console.log(`Result is ${result}`)
}
getValue((value1, value2) => {
    console.log(`Values are ${value1} ${value2}`)
    return value1 * value2
})
const logi = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', status => console.log(status), err => console.log(err))











