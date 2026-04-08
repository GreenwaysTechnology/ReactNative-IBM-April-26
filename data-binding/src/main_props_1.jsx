import { createRoot } from 'react-dom/client'

// function User(id, name, email, address) {
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Email : {email}</h2>
//         <h3>Address :{address.city}</h3>
//     </div>
// }
// function User(abc) {
//     console.log(abc)
//     return <div>
//         <h1>Id : {abc.id}</h1>
//         <h2>Name : {abc.name}</h2>
//         <h2>Email : {abc.email}</h2>
//         <h3>Address :{abc.address.city}</h3>
//     </div>
// }
function User(props) {
    console.log(props)
    return <div>
        <h1>Id : {props.id}</h1>
        <h2>Name : {props.name}</h2>
        <h2>Email : {props.email}</h2>
        <h3>Address :{props.address.city}</h3>
    </div>
}

createRoot(document.getElementById('root'))
    .render(<User 
        id={1} 
        name="Subramanian Murugan" 
        email="sasubramanian.md@hotmail.com" 
        address = {{city:'coimbatore'}}
        />)
