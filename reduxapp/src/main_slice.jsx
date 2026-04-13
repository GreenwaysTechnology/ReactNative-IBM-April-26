import { configureStore, createReducer, createSlice } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        //our own reducers :bizlogic
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= 1
        },
        incrementBy: (state, action) => {
            state.value += action.payload
        }

    }
})
//extract actions(constants)
const { increment, decrement, incrementBy } = counterSlice.actions
//extract reducers
const counterReducer = counterSlice.reducer

console.log(increment(),decrement(),incrementBy(2))
//create store object
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

//react - UI
const Counter = () => {
    //Get inital data from redux
    const state = useSelector(appState => {
        return appState.counter
    })
    const dispatch = useDispatch() //dispatcher

    return <div>
        <h1>Count {state.value}</h1>
        <button onClick={() => {
            dispatch({ type: increment })
        }}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: incrementBy    , payload: 2 })
        }}>IncrementBy</button>
    </div>
}


function App() {

    return <Provider store={store}>
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <App />
)
