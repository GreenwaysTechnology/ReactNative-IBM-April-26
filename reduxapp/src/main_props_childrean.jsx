import React, { useState, useContext } from 'react'
import { createRoot } from 'react-dom/client'

function Calls() {
    return <h1>CallList</h1>
}
function Updates() {
    return <h1>Updates</h1>
}


// function Tab(props) {
//     return <div>
//         {/* Render any tab content */}
//         {props.children}
//     </div>
// }
function Tab({ children }) {
    return <div>
        {/* Render any tab content */}
        {children}
    </div>
}
function Card({ children }) {
    return <div style={{ border: "1px solid gray", padding: "20px" }}>
        {children}
    </div>
}
function Layout({ children }) {
    return <div>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
    </div>
}

function App() {

    return <Layout>
        <Tab>
            {/* here you can pass any component */}
            {/* <Calls/> */}
            {/* <Updates /> */}
            <Card>
                <h2>Title</h2>
                <p>Description</p>
            </Card>
        </Tab>
    </Layout>
}

createRoot(document.getElementById('root')).render(
    <App />
)
