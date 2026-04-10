import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
    const [count, setCount] = useState(0);

    //useEffect:ComponentDidMount
    useEffect(() => { 
        console.log("Component did mount")
        setCount(1)
    }, [])

    //useEffect: ComponentDidupdate
    useEffect(() => {
        //avoid runnning on inital render
        if (count !== 0) {
            //code to be executed
            console.log("component did update", count)
        }
    }, [count])


    return <div>
        <h1>count:{count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>+</button>
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
