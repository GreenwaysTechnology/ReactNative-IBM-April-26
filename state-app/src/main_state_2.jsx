import { createRoot } from 'react-dom/client'
import React from 'react'

class Review extends React.Component {
    //data 
    state = {
        like: 0
    }
    //listener:
    onIncrement = () => {
        //bizlogic of code
        console.log('button clicked')
    }

    render() {
        console.log("state", this.state)
        return <div style={{ margin: 50 }}>
            <h1>Review App</h1>
            <h1>Like : {this.state.like}</h1>
            <button onClick={this.onIncrement} >Like</button>
        </div>
    }
}




function App() {

    return <>
        <Review />
    </>
}


createRoot(document.getElementById('root')).render(<App />)
