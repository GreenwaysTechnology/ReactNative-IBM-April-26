//pure functon rule A:
//if function receives input, the function returns the input without any mutation...


//This is function is called pure function
function Hello(message){
    return message
}
console.log(Hello('hello'))

//this function is not pure function - impure function
function doubleIt(value) {
    return value * 2
}
console.log(doubleIt(20))
