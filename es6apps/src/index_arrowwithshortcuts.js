//if function has only one line of body, remove {}
let hai = () => console.log("Hai")
hai()

//if only return statement
let add = (a = 0, b = 0) => a + b
console.log(add(10, 10))


let getValue = (a) => {
    return a * 2
}

getValue = a => a * 2