
import { createRoot } from "react-dom/client"

//elements must be organized under one single root element.
function Heading() {
    return <div>
        <h1>IBM</h1>
        <p>This is react</p>
    </div>
}



createRoot(document.getElementById('root'))
    .render(<Heading />)