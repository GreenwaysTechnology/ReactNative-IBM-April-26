import { produce } from 'immer'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const Counter = props => {

    const [counter, setCounter] = useState({ increment: 0, decrement: 100 })

    const onIncrement = () => {
        // setCounter(prevState => {
        //     return {
        //         ...prevState, increment: prevState.increment + 1
        //     }
        // })
        //setCounter(({ ...counter, increment: counter.increment + 1 }))
        setCounter(produce(counter, draft => {
            draft.increment += 1
        }))
    }

    return <div>
        <h1>Increment {counter.increment} Decrement {counter.decrement}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}




function App() {
    return <>
        <Counter />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
