import { createRoot } from 'react-dom/client'
import React from 'react'


class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }

    }
    onLike = () => {
        // this.setState((previousState) => {
        //     return {
        //         ...previousState, // copy all inner properties
        //         house: {
        //             ...previousState.house, //copy all house properties
        //             points: previousState.house.points + 2
        //         }
        //     }
        // })
        this.setState(({
            ...this.state, // copy all inner properties
            house: {
                ...this.state.house, //copy all house properties
                points: this.state.house.points + 2
            }
        }))
    }
    render() {

        return <div style={{ margin: "50px" }}>
            <h1>Review</h1>
            <h1>House Name: {this.state.house.name} Points:{this.state.house.points}</h1>
            <button onClick={this.onLike}>Like</button>
        </div>
    }
}

function App() {

    return <>
        <Review />
    </>
}


createRoot(document.getElementById('root')).render(<App />)