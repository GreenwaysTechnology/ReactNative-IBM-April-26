import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//redux - Biz logic and state
const CounterIncrementReducer = (count = { value: 10 }, action) => {
    //logic
    switch (action.type) {
        case "counter/increment":
            //immutable logic
            return produce(count, (draft) => {
                draft.value += 1
            })
        default:
            //default state or inital state
            return count
    }
}

const CounterDecrementReducer = (count = { value: 10 }, action) => {
    //logic
    switch (action.type) {
        case "counter/decrement":
            return produce(count, (draft) => {
                draft.value -= 1
            })
        default:
            //default state or inital state
            return count
    }
}
const CounterIncrementByReducer = (count = { value: 10 }, action) => {
    //logic
    switch (action.type) {
        case "counter/incrementBy":
            return produce(count, (draft) => {
                draft.value += action.payload
            })
        default:
            //default state or inital state
            return count
    }
}
//create store object
const store = configureStore({
    reducer: {
        increment: CounterIncrementReducer,
        decrement: CounterDecrementReducer,
        incrementBy: CounterIncrementByReducer
    }
})

//react - UI
const Counter = () => {
    const incrementState = useSelector(appState => {
        return appState.increment
    })

    const decrementState = useSelector(appState => {
        return appState.decrement
    })

    const incrementByState = useSelector(appState => {
        return appState.incrementBy
    })
    const dispatch = useDispatch() //dispatcher

    const onIncrement = () => {
        //send request to redux reducer via action object
        dispatch({ type: 'counter/increment' })
    }
    return <div>
        <h1>Increment: {incrementState.value} Decrement:{decrementState.value} IncrementBy:{incrementByState.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: 'counter/incrementBy', payload: 2 })
        }}>IncrementBy</button>
    </div>
}


function App() {

    return <Provider store={store}>
        {/* Render Counter Component */}
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <App />
)
