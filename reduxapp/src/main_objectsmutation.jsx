import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux - Biz logic and state
const CounterReducer = (count = { value: 10 }, action) => {
    //logic
    switch (action.type) {
        case "counter/increment":
            //immutable logic
            return { ...count, value: count.value + 1 }
        case "counter/decrement":
            return { ...count, value: count.value - 1 }
        case "counter/incrementBy":
            return { ...count, value: count.value + action.payload }
        default:
            //default state or inital state
            return count
    }
}
//create store object
const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

//react - UI
const Counter = () => {
    const state = useSelector(appState => {
        return appState.counter
    })
    const dispatch = useDispatch() //dispatcher

    const onIncrement = () => {
        //send request to redux reducer via action object
        dispatch({ type: 'counter/increment' })
    }
    return <div>
        <h1>Count {state.value}</h1>
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
