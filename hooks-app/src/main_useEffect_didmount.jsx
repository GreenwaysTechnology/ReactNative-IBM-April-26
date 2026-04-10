import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
    //componentDid mount: only once when the component loads
    const [count, setCount] = useState(0);
    //useEffect: ComponentDidmount
    // useEffect(() => {
    //     console.log("component did mount")
    //     setCount(1)
    // }, []) //runs oncly once

    useEffect(() => {
        console.log("component did mount")
        //async operation
        setTimeout(() => {
            setCount(1)
        }, 5000)
    }, []) //runs oncly once

    return <div>
        <h1>count:{count}</h1>
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
