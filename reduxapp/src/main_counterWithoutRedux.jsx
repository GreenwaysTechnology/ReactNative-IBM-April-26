import { useState } from 'react'
import { createRoot } from 'react-dom/client'


const Counter = () => {
    //state
    const [count, setCount] = useState(0)

    const onIncrement = () => {
        //  biz logic
        setCount(count + 1)
    }
    return <div>
        <h1>Count {count}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}





function App() {

    return <Counter/>
}

createRoot(document.getElementById('root')).render(
    <App />
)
