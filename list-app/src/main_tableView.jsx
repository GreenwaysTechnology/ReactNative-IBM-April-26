import { createRoot } from 'react-dom/client'

function TableView({ items }) {

    return <table border="1" cellPadding="10">
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
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
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
