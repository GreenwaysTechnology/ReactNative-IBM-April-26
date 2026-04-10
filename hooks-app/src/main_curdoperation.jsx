import { produce } from 'immer'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function Post() {
    //inital post data
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', body: 'this is firstPost' },
        { id: 2, title: 'Post 2', body: 'this is secondPost' }
    ])

    //to hold form values
    const [form, setForm] = useState({ id: null, title: '', body: '' })

    //track add or update 
    const [isEditing, setIsEditing] = useState(false)

    //to read entire form data
    const handleSubmit = e => {
        e.preventDefault() // to stop triggering default event 
        //decide add or update
        isEditing ? updatePost() : addPost()
    }
    const updatePost = () => {
        //here update logic
        console.log('update post')
        setPosts(posts.map(post => post.id === form.id ? form : post))
        setIsEditing(false)
        clearForm()
    }
    const addPost = () => {
        //here add post logic: you have add new item into an array(posts)
        const newPost = { id: posts.length + 1, title: form.title, body: form.body }
        setPosts([...posts, newPost])
        //clear the form fields after adding
        clearForm()
    }
    const clearForm = () => {
        setForm({ id: null, title: '', body: '' })
    }

    const handleEdit = post => {
        console.log(post)
        //login data into form
        setForm({ id: post.id, title: post.title, body: post.body })
        //change the button state from add to update
        setIsEditing(true)
    }
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return <div>
        {/* Forms */}
        {/* Todo: remove this once the code is tested */}
        {/* {JSON.stringify(form)} */}
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={form.title}
                    required
                    onChange={(e) => {
                        //read value from the this textbox and assign to state variable
                        setForm({ ...form, title: e.target.value })
                        //console.log('typing...')
                    }}
                    placeholder="Enter Title" />
            </div>
            <div>
                <textarea
                    value={form.body}
                    onChange={e => setForm({ ...form, body: e.target.value })}
                    placeholder="Enter Body" />
            </div>
            <div>
                <button>{isEditing ? "Update " : "Add "}Post</button>
            </div>
        </form>

        {/* Render list */}
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => {
                        handleEdit(post)
                    }}>Edit</button>
                    <button onClick={() => {
                        handleDelete(post.id)
                    }}>Delete</button>
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