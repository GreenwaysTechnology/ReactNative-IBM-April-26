
class Employee {
    //instance variables and instance methods
    id = 1
    name = 'Subramanian'
    salary = 1000

    //methods
    calcaulte() {
        return 10 * this.salary
    }
    calculateHolidays = () => 10
}
//create instance
//let is keywor
//emp is variable - reference variable
//new is memory allocation operator
//Employee() - is constructor call
let emp = new Employee()
console.log(emp.id,emp.name,emp.salary,emp.calcaulte(),emp.calculateHolidays())