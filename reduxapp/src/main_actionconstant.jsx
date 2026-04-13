import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constant
const counterIncrement = "counter/increment"
const counterDecrement = "counter/decrement"
const counterIncrementBy = "counter/incrementBy"

//redux - Biz logic and state
const CounterIncrementReducer = (count = { value: 10 }, action) => {
    //logic
    switch (action.type) {
        case counterIncrement:
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
        case counterDecrement:
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
        case counterIncrementBy:
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
        dispatch({ type: counterIncrement })
    }
    return <div>
        <h1>Increment: {incrementState.value} Decrement:{decrementState.value} IncrementBy:{incrementByState.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: counterDecrement })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: counterIncrementBy, payload: 2 })
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
