import { createRoot } from 'react-dom/client'

//component composition and props
const Address = ({ city }) => {
    return <>
        <h3>{city}</h3>
    </>
}
const Email = ({ email }) => <>
    <h2>{email}</h2>
</>
const Avatar = ({ profilePic }) => <img src={profilePic} height={100} width={100} />

const User = ({ id, name, email, address: { city },profilePic }) => <div>
    <Avatar profilePic={profilePic} />
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <Email email={email} />
    <Address city={city} />
</div>



createRoot(document.getElementById('root'))
    .render(
        <>
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
    )
