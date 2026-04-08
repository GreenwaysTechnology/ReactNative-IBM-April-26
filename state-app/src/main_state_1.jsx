import { createRoot } from 'react-dom/client'
import React from 'react'

class Review extends React.Component {
    //data 
    state = {
        like:0
    }
    render() {
        console.log("state",this.state)
        return <div style={{margin:50}}>
            <h1>Review App</h1>
            <h1>Like : {this.state.like}</h1>
        </div>
    }
}




function App() {

    return <>
        <Review />
    </>
}


createRoot(document.getElementById('root')).render( <App />)
