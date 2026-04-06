//object destructuring 

// function printEmployee(employee){
//     console.log(`Id ${employee.id}`)
//     console.log(`name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)
// }

// function printEmployee(employee){
//     //destructure 
//     const {id,name,address} = employee
//     console.log(`Id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`City ${address.city}`)
// }
// function printEmployee({id,name,address} ){
//      console.log(`Id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`City ${address.city}`)
// }
const printEmployee = ({ id, name, address }) => {
    console.log(`Id ${id}`)
    console.log(`name ${name}`)
    console.log(`City ${address.city}`)
}
printEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })
///////////////////////////////////////////////////////////////////////////////////////////
//returning object and destructuring
// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 1000
//     }
// }
// function getStock(id = 0, symbol = 'symbol', qty = 0, price = 0) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// function getStock(id = 0, symbol = 'symbol', qty = 0, price = 0) {
//     //destrcture
//     // return {
//     //     id: id,
//     //     symbol: symbol,
//     //     qty: qty,
//     //     price: price
//     // }
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }

// const getStock = (id = 0, symbol = 'symbol', qty = 0, price = 0) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStock = (id = 0, symbol = 'symbol', qty = 0, price = 0) => ({
        id,
        symbol,
        qty,
        price
})

console.log(getStock())
console.log(getStock(1, 'openAi', 100, 1000))