import { configureStore, createReducer } from '@reduxjs/toolkit'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createLogger } from 'redux-logger'

const logger = createLogger()


const initialState = { value: 0 }
const counterReducer = createReducer(initialState, builder => {
    builder.addCase('counter/increment', (state, action) => {
        //immer js code is default
        state.value += 1
    }).addCase('counter/decrement', (state, action) => {
        state.value -= 1
    }).addCase('counter/incrementBy', (state, action) => {
        state.value += action.payload
    }).addDefaultCase((state, action) => { })
})
//create store object
const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)

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
            dispatch({ type: 'counter/increment' })
        }}>+</button>
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
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <App />
)
