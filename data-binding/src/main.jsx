import { createRoot } from 'react-dom/client'

// function User(props) {
//     return <UserDetails 
//     id={props.id}
//     name={props.name}
//     email={props.email}
//     city={props.address.city} />

// }

function User(props) {
    return <UserDetails {...props} title="User details"   />

}
function UserDetails(props){
    console.log(props)
   return  <div>
        <h1>{props.title}</h1>
        <h1>Id : {props.id}</h1>
        <h2>Name : {props.name}</h2>
        <h2>Email : {props.email}</h2>
        <h3>Address :{props.address.city}</h3>
    </div>
}
function App() {
    return <>
        <User
            id={1}
            name="Subramanian Murugan"
            email="sasubramanian.md@hotmail.com"
            address={{ city: 'coimbatore' }}
        />
    
    </>
}

createRoot(document.getElementById('root'))
    .render(<App />)
