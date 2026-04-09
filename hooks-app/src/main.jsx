import { produce } from 'immer'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function Post() {
    //inital post data
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', body: 'this is firstPost' },
        { id: 2, title: 'Post 2', body: 'this is secondPost' }
    ])

    //track add or update 
    const [isEditing, setIsEditing] = useState(false)

    return <div>
        {/* Forms */}
        <form>
            <div>
                <input placeholder="title" />
            </div>
            <div>
                <textarea placeholder="Body" />
            </div>
            <div>
                <button>{isEditing ? "Update " : "Add " }Post</button>
            </div>
        </form>

        {/* Render list */}
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            })}
        </ul>
    </div>

}

function App() {
    return <div style={{ margin: "60px" }}>
        <Post />
    </div>
}

createRoot(document.getElementById('root')).render(
    <App />
)