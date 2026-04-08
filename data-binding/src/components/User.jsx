import { Email } from './Email'
import { Avatar } from './Avatar'
import { Address } from './Address'

const User = ({ id, name, email, address: { city }, profilePic }) => <div>
    <Avatar profilePic={profilePic} />
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <Email email={email} />
    <Address city={city} />
</div>
export { User }