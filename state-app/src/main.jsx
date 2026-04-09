import { createRoot } from 'react-dom/client'
import { produce } from 'immer'
import React from 'react'


class Users extends React.Component {
    state = {
        users: [], //handle users data
        isLoading: false, //handle spinners
        error: null //handle any error while fetching
    }

    async fetchUsers() {
        try {
            const url = `https://jsonplaceholder.typicode.com/users`
            const response = await fetch(url)
            if (!response.ok) throw new Error('Network response was not ok');
            const users = await response.json()
            console.log(users)
            this.setState(produce(this.state, draft => {
                draft.users = users
                draft.isLoading = true
            }))

        }
        catch (err) {
            this.setState(produce(this.state, draft => {
                draft.error = err
                draft.isLoading = true
            }))
        }
    }

    //api logic
    componentDidMount() {
        this.fetchUsers()
    }

    render() {
        const { users, isLoading, error } = this.state
        //conditional rendering
        if (error) {
            return <div>
                <h1>{error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h1>Loading....</h1>
        } else {
            return <ul>
                {users.map(user => {
                    return <li key={user.id}>
                        <span>{user.name}</span>
                    </li>
                })}
            </ul>
        }
    }

}


function App() {

    return <>
        <Users />
    </>
}


createRoot(document.getElementById('root')).render(<App />)