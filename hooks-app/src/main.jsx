import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'

function User() {
    const initalState = {
        items: [],
        error: null,
        isLoading: false
    }
    const [users, setUsers] = useState(initalState)

    const fetchUsers = async () => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url)
            const tmpUsers = await response.json()
            setUsers(produce(users, draft => {
                draft.items = tmpUsers
                draft.isLoading = true
            }))
        }
        catch (err) {
            setUsers(produce(users, draft => {
                draft.error = err
                draft.isLoading = true
            }))
        }
    }

    //componentDidMount
    useEffect(() => {
        fetchUsers()
    }, [])

    const { error, items, isLoading } = users
    //show different ui: one for error, loading, data
    if (error) {
        return <h1>Something went Wrong!</h1>
    } else if (!isLoading) {
        return <h1>Loading...</h1>
    } else {
        return <ul>
            {items.map(user => {
                return <li key={user.id}>
                    <span>{user.name} {user.email}</span>
                </li>
            })}
        </ul>
    }

}



function App() {
    return <>
        <User />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
