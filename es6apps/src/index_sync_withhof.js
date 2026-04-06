
function blockMe(message) {
    console.log(message)
}
function sayHello(cb) {
    cb()
}

function main() {
    blockMe('start')
    sayHello(() => console.log('hello'))
    blockMe('end')
}
main()