import { createRoot } from 'react-dom/client'

// function User(props) {
//     const { id, name, email, address } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Email : {email}</h2>
//         <h3>Address :{address.city}</h3>
//     </div>
// }
// function User(props) {
//     const { id, name, email, address: { city } } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Email : {email}</h2>
//         <h3>Address :{city}</h3>
//     </div>
// }
// function User( { id, name, email, address: { city } } ) {
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Email : {email}</h2>
//         <h3>Address :{city}</h3>
//     </div>
// }

const User = ({ id, name, email, address: { city } }) => <div>
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <h2>Email : {email}</h2>
    <h3>Address :{city}</h3>
</div>


createRoot(document.getElementById('root'))
    .render(
        <>
            <User
                id={1}
                name="Subramanian Murugan"
                email="sasubramanian.md@hotmail.com"
                address={{ city: 'coimbatore' }}
            />
            <User
                id={2}
                name="Karthik K"
                email="karthi.k@gmail.com"
                address={{ city: 'Chennai' }}
            />
        </>
    )
