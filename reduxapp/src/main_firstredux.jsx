import { configureStore } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux - Biz logic and state
const CounterReducer = (count = 10, action) => {
    //logic
    switch (action.type) {
        case "counter/increment":
            //return value
            return count + 1
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
    //Get inital data from redux
    const value = useSelector(appState => {
        return appState.counter
    })
    console.log(value)
    const dispatch = useDispatch() //dispatcher

    const onIncrement = () => {
        //send request to redux reducer via action object
        dispatch({ type: 'counter/increment' })
    }
    return <div>
        <h1>Count {value}</h1>
        <button onClick={onIncrement}>+</button>
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
