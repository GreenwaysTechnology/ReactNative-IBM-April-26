//async keyword

//  function getValue(){
//     return 10
// }

// function getValue() {
//     return Promise.resolve(10)
// }
async function getValue() {
    return 10 // Promise.resolve(10)
}

function main() {
    // let value = getValue()
    // console.log(value)
    getValue().then(value=>console.log(value))
}
main()