
import { createRoot } from "react-dom/client"

//every opened element must be closed
// const Heading = () => <h1>Hello React!

 const Heading = () => <h1>Hello React!</h1>

// createRoot(document.getElementById('root'))
//     .render(<Heading />)

createRoot(document.getElementById('root'))
    .render(<Heading/>)