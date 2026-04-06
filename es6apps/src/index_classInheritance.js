class Account {
    constructor() {
        console.log('account is initalized')
    }
    deposit() {
        return 0
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount is initalized')
    }
    deposit() {
        return 10
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())
