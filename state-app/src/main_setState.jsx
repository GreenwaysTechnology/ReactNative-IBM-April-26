import { createRoot } from 'react-dom/client'
import React from 'react'

class Review extends React.Component {
    //data 
    state = {
        like: 0
    }
    //listener:
    onIncrement = () => {
        // this.setState(function (previousState) {
        //     //return immutable object
        //     // return {
        //     //     like: previousState.like + 1
        //     // }
        //     //  return Object.assign({}, previousState, { like: previousState.like + 1 })
        //     return { ...previousState, like: previousState.like + 1 }
        // })
        // this.setState((previousState) => {
        //     return { ...previousState, like: previousState.like + 1 }
        // })

        // this.setState((previousState) => ({ ...previousState, like: previousState.like + 1 }))
        this.setState(({ ...this.state, like: this.state.like + 1 }))

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
