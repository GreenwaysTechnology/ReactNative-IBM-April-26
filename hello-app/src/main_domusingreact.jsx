
import { createRoot } from "react-dom/client"

//declare heading element
const Heading = <h1>Hello React!</h1>
//get the root element
// const RootElement = document.getElementById('root')
//render into dom
// createRoot(RootElement).render(Heading)
createRoot(document.getElementById('root')).render(Heading)
