//array declaration

let numList = [1, 2, 3, 4]
console.log(`Length ${numList.length}`)
//iterate
numList.forEach((num) => {
    console.log(num)
})

//object list
let employeeList = [
    { id: 1, name: 'a1' },
    { id: 2, name: 'a2' },
    { id: 3, name: 'a3' },
    { id: 4, name: 'a4' },
    { id: 5, name: 'a5' },
    { id: 6, name: 'a6' },

]
employeeList.forEach((emp)=>{
    console.log(emp)
    console.log(emp.id,emp.name)
})