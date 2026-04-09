import { createRoot } from 'react-dom/client'
import React from 'react'

class Review extends React.Component {
    //data 
    state = {
        like: 0,
        dislike: 10
    }
    onLike = () => {
        this.setState(({ ...this.state, like: this.state.like + 1 }))
    }
    onDislike = () => {
        this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))
    }
    render() {
        console.log("state", this.state)
        return <div style={{ margin: 50 }}>
            <h1>Review App</h1>
            <h1>Like : {this.state.like} Dislike : {this.state.dislike}</h1>
            <button onClick={this.onLike}>Like</button>
            <button onClick={this.onDislike}>Dislike</button>

        </div>
    }
}




function App() {

    return <>
        <Review />
    </>
}


createRoot(document.getElementById('root')).render(<App />)
