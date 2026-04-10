import React, { useState, useContext } from 'react'
import { createRoot } from 'react-dom/client'

//create Context Object
export const UserContext = React.createContext()
export const StatusContext = React.createContext()

// function User(props) {
//     //how to read data via there is hook useContext
//     const context = useContext(UserContext)
//     return <div>
//         <h1>{context.user}</h1>
//         <button onClick={()=>context.setUser("Geetha Subramanian")}>Change Name</button>
//     </div>
// }
function User(props) {
    //how to read data via there is hook useContext
    const { user, setUser } = useContext(UserContext)
    return <div>
        <h1>User {user}</h1>
        <button onClick={() => setUser("Geetha Subramanian")}>Change Name</button>
    </div>
}

function Customer() {
    const { user, setUser } = useContext(UserContext)
    return <div>
        <h1>Customer {user}</h1>
        <button onClick={() => setUser("Geetha Subramanian")}>Change Name</button>
    </div>
}


function App() {
    const [user, setUser] = useState("Subramanian Murgan")
    const [status, setStatus] = useState(false)
    //provider is object(Component) used to provide/share data
    return <UserContext.Provider value={{ user, setUser,status }} >
        {/* child component */}
        <User />
        <Customer />
    </UserContext.Provider>
}

createRoot(document.getElementById('root')).render(
    <App />
)
