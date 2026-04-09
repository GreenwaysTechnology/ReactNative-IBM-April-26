import React from 'react'
import { createRoot } from 'react-dom/client'
import USERS from './mock-data/users'

class Users extends React.Component {

    state = {
        selectedUser: null
    }
    //method to get selected item
    onUserSelected = (user) => {
        //console.log('item selected', user)
        this.setState(({ ...this.state, selectedUser: user }))
        console.log('item selected', this.state.selectedUser)
    }

    render() {
        return <div style={{ margin: "50px" }}>
            <h1>Users</h1>
            {
                this.props.users.map(user => {
                    return <section key={user.id}>
                        <p style={{ cursor: 'pointer' }} onClick={() => {
                            this.onUserSelected(user)
                        }}>{user.name}</p>
                    </section>
                })
            }
            {/* Details section :conditional rendering */}
            {this.state.selectedUser ? <div>
                <h1>Id : {this.state.selectedUser.id}</h1>
                <h2>Name: {this.state.selectedUser.name}</h2>
                <h2>User Name:{this.state.selectedUser.username}</h2>
                <h2>Email:{this.state.selectedUser.email}</h2>
            </div> : <><h1>No User is selected</h1></>}

        </div>
    }
}
const App = () => {
    return <>
        <Users users={USERS} />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)