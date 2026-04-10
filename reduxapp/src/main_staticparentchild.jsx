import React, { useState, useContext } from 'react'
import { createRoot } from 'react-dom/client'

function Calls() {
    return <h1>CallList</h1>
}
function Updates() {
    return <h1>Updates</h1>
}

// function Tab() {
//     return <Calls />
// }
// function Tab() {
//     return <Calls />
// }

//Tab is tightly coupled with some compoents.

function Tab({ initTab }) {
    const [tabName, settabName] = useState(initTab)
    if (tabName === "Calls") {
        return <Calls />
    } else {
        return <Updates />
    }
}
function App() {
    return <Tab initTab="Updates" />
}

createRoot(document.getElementById('root')).render(
    <App />
)
