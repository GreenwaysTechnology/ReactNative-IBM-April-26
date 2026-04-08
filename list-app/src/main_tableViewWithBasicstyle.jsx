import { createRoot } from 'react-dom/client'

const cellStyle = {
    border:"1px solid #ddd",
    padding:"10px"
    
}

function TableView({ items }) {

    return <table style={{width:"100%",borderCollapse:"collapse" }} >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {items.map((user) => {
                return <tr key={user.id}>
                    <td style={cellStyle}>{user.id}</td>
                    <td style={cellStyle}>{user.name}</td>
                    <td style={cellStyle}>{user.age}</td>
                </tr>
            })}
        </tbody>
    </table>
}

function App() {
    const items = [{
        id: 1,
        name: 'Subramanian Murugan',
        age: 46
    },
    {
        id: 2,
        name: 'Karthik',
        age: 36
    }

    ]
    return <>
        <TableView items={items} />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
