import { createRoot } from 'react-dom/client'

function User({ id = 0 ,name="Your Name",email="foo@somedomain.com",address: { city = "Your City"} = {}}) {
    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {name}</h2>
        <h2>Email : {email}</h2>
        <h3>Address :{city}</h3>
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
        <User
            id={2}
            name="Karthik K"
            email="karthi.k@gmail.com"
            address={{ city: 'Chennai' }}
        />
        <User />
        <User id={3} name="John" />
    </>
}

createRoot(document.getElementById('root'))
    .render(<App />)
