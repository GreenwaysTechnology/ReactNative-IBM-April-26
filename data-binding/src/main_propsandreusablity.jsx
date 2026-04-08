import { createRoot } from 'react-dom/client'

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
