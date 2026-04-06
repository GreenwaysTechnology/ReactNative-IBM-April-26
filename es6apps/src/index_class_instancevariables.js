
// class Employee {
//     //instance variables  initalzed inside class
//     id = 1
//     name = 'Subramanian'
//     salary = 1000

//     //methods
//     calcaulte() {
//         return 10 * this.salary
//     }
//     calculateHolidays = () => 10
// }
// class Employee {
//     //instance variables  initalzed inside constructor
//     id
//     name
//     salary
//     constructor() {
//         this.id = 1
//         this.name = "subramanian"
//         this.salary = 1000
//     }

//     //methods
//     calcaulte() {
//         return 10 * this.salary
//     }
//     calculateHolidays = () => 10
// }
class Employee {
    //instance variables  initalzed inside constructor
    id
    name
    salary
    constructor(id = 1, name = '', salary = 0) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    //methods
    calcaulte() {
        return 10 * this.salary
    }
    calculateHolidays = () => 10
}
let emp = new Employee(10, 'Ram', 1000)
console.log(emp.id, emp.name, emp.salary, emp.calcaulte(), emp.calculateHolidays())

emp = new Employee()
console.log(emp.id, emp.name, emp.salary, emp.calcaulte(), emp.calculateHolidays())