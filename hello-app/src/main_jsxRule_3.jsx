
import { createRoot } from "react-dom/client"

// function heading() {
//     return <div>
//         <h1>IBM</h1>
//         <p>This is react</p>
//     </div>
// }
function Heading() {
    return <div>
        <h1>IBM</h1>
        <p>This is react</p>
    </div>
}


createRoot(document.getElementById('root'))
    .render(<Heading />)