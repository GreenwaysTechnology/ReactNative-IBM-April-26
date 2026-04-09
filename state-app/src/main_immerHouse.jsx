import { createRoot } from 'react-dom/client'
import React from 'react'
import { produce } from 'immer'


class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }

    }
    onLike = () => {
        //immmutable code- old way
        // this.setState(({
        //     ...this.state, // copy all inner properties
        //     house: {
        //         ...this.state.house, //copy all house properties
        //         points: this.state.house.points + 2
        //     }
        // }))
        // this.setState((prevState) => {
        //     //use immer api called produce
        //     return produce(prevState, draft => {
        //         draft.house.points += 1
        //     })
        // })
        this.setState(produce(this.state, draft => {
            draft.house.points += 1
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