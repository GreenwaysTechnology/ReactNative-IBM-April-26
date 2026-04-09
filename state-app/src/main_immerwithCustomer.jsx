import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'

class Customer extends React.Component {
    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    email: 'test@ibm.com',
                    mobileNo: '9000000'
                }
            }
        }
    }
    onUpdate = () => {
        // this.setState(({
        //     ...this.state, //copy all state properties
        //     customer: {
        //         ...this.state.customer, //copy all customer properties
        //         contact: {
        //             ...this.state.customer.contact, //copy all contac properties
        //             communcation: {
        //                 ...this.state.customer.contact.communcation, //copy all commnication properties
        //                 mobileNo: '9003706368' //new value to be updated
        //             }
        //         }
        //     }
        // }))
        this.setState(produce(this.state, draft => {
            draft.customer.contact.communcation.mobileNo = '900706368'
        }))
    }
    render() {
        return <div>
            <h1>Customer info</h1>
            <h2>Name : {this.state.customer.name}</h2>
            <h2>Phone : {this.state.customer.contact.communcation.mobileNo}</h2>
            <button onClick={this.onUpdate}>Update Mobile No</button>
        </div>

    }
}


function App() {
    return <>
        <Customer />
    </>
}


createRoot(document.getElementById('root')).render(<App />)