import { createRoot } from 'react-dom/client'

function ListView({ items }) {

    return <div>
        <h1>User List</h1>
        <ul>
            {items.map((user) => {
                return <li key={user.id}>
                    <span>
                        {user.id}
                    </span>
                    <span>
                        {user.name}
                    </span>
                    <span>
                        {user.age}

                    </span>
                </li>
            })}
        </ul>
    </div>
}

function App() {
    const items = [{
        id:1,
        name:'Subramanian Murugan',
        age:46 
    },
    {
        id:2,
        name:'Karthik',
        age:36
    }

]
    return <>
        <ListView items={items} />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
