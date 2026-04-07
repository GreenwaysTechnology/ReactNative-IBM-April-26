function getSum() {
    return Promise.resolve(2)
}

function getValueOne() {
    return Promise.resolve(2)
}
function getValueTwo(input) {
    return Promise.resolve(2 * input)
}

function getValueThree(input) {
    return Promise.resolve(3 * input)
}


function main() {
    getSum()
        .then(value => value * 2) //returns a promise
        .then(value => value * 3)  //resolve value and returns new promise
        .then(result => console.log(result))

    // getValueOne()
    // .then(value=>{
    //     return getValueTwo(value)
    // })
    // .then(value=>{
    //     return getValueThree(value)
    // })
    // .then(value=>console.log(value))

    getValueOne()
        .then(value =>getValueTwo(value))
        .then(value =>getValueThree(value))
        .then(value => console.log(value))

}
main()