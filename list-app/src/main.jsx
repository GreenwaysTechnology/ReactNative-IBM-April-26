import { createRoot } from 'react-dom/client'
import './index.css'

const styles = {
    container: {
        padding: "20px",
        background: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0,.05"

    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    headerRow: {
        background: "#59e546"
    },
    cellStyle: {
        border: "1px solid #ddd",
        padding: "10px"
    }

}
function TableView({ items }) {

    return <div style={styles.container}>
         <h1 className="text-xl font-medium text-black dark:text-white">User List</h1>
        <table style={styles.table} >
            <thead style={styles.headerRow}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {items.map((user) => {
                    return <tr key={user.id}>
                        <td style={styles.cellStyle}>{user.id}</td>
                        <td style={styles.cellStyle}>{user.name}</td>
                        <td style={styles.cellStyle}>{user.age}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
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
