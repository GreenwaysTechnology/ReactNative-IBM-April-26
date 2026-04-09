import { createRoot } from 'react-dom/client'
import React from 'react'


class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    onLike = () => {
        this.setState(prevState => {
            return { ...prevState, like: prevState.like + 1 }
        })
    }
    onDislike = () => {
        this.setState(prevState => {
            return { ...prevState, dislike: prevState.dislike + 1 }
        })
    }
    render() {
        // state as prop , listener as prop
        return <ReviewDashBoard {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
    }
}
const ReviewDashBoard = props => {
    return <div>
        <h1>Review App</h1>
        <h2>Like : {props.like}  Dislike : {props.dislike}</h2>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDislike}>Dislike</button>
    
    </div>

}

function App() {

    return <>
        <Review />
    </>
}


createRoot(document.getElementById('root')).render(<App />)