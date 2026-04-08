//is it pure or not - function impure
// function add(todos, todo) {
//     return todos.push(todo)
// }

function add(todos, todo) {
    //return todos.push(todo)
    //return todos.concat(todo)
    return [...todos, todo]
}
let todos = [{
    title: 'Learn react',
    done: true
}];

Object.freeze(todos)
const result = add(todos, { title: 'Learn Microservices', done: false })
console.log(result)