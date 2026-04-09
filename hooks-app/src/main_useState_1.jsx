import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function Review() {
    //state 
    const [like, setLike] = useState(0)

    //listener
    const onIncrment = () => {
        // setLike(prevState => {
        //     return prevState + 1
        // })
        setLike(like + 1)
    }

    return <div style={{ margin: "50px" }}>
        <h1>Review</h1>
        <h1>Like : {like}</h1>
        <button onClick={onIncrment}>Like</button>
        <button onClick={() => {
            setLike(like + 1)
        }}>Like</button>

    </div>
}



function App() {
    return <>
        <Review />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
