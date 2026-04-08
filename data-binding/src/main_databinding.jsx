import { createRoot } from 'react-dom/client'

function User() {
    //data
    const id =1
    const name ='Subramanian'
    const email ='sasubramanian_md@hotmail.com'
    const address = {
        city:'Coimbatore'
    }

    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {name}</h2>
        <h2>Email : {email}</h2>
        <h3>Address :{address.city}</h3>
    </div>
}

createRoot(document.getElementById('root')).render(
    <User />
)
