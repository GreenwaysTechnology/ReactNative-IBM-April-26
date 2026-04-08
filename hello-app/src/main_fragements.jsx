
// import React,{Fragment} from "react"
import { createRoot } from "react-dom/client"

// function Heading() {
//     return <React.Fragment>
//          <h1>IBM</h1>
//         <p>This is react</p>
//     </React.Fragment>
// }
// function Heading() {
//     return <Fragment>
//          <h1>IBM</h1>
//         <p>This is react</p>
//     </Fragment>
// }

function Heading() {
    return <>
         <h1>IBM</h1>
        <p>This is react</p>
    </>
}



createRoot(document.getElementById('root'))
    .render(<Heading />)