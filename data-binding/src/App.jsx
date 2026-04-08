import { User } from './components/User'

//root Component
function App() {
    return <>
        <User
            id={1}
            name="Subramanian Murugan"
            email="sasubramanian.md@hotmail.com"
            address={{ city: 'coimbatore' }}
            profilePic='https://imgur.com/1bX5QH6.jpg'
        />
        <User
            id={2}
            name="Karthik K"
            email="karthi.k@gmail.com"
            address={{ city: 'Chennai' }}
            profilePic='https://imgur.com/1bX5QH6.jpg'

        />
    </>
}
export default App;