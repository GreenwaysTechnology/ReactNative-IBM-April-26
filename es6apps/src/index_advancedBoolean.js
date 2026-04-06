let message = 'Hello'

if (message) {
    console.log("true")
} else {
    console.log('wrong')
}
message = ''
if (message) {
    console.log(message)
} else {
    console.log('empty string is false')
}
let myvar;
if (myvar) {
    console.log(`MyVar is ${myvar}`)
} else {
    console.log(`MyVar is false because it is ${myvar}`)
}
myvar = 0
if (myvar) {
    console.log(`MyVar is ${myvar}`)
} else {
    console.log(`MyVar is ${myvar}`)
}
myvar = false
if (myvar) {
    console.log(`MyVar is ${myvar}`)
} else {
    console.log(`MyVar is ${myvar}`)
}
