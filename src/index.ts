import { Collections } from "./models/Collection"
import { User, UserProps } from "./models/User"

const collection = new Collections<User,UserProps>(
    'http://localhost:3000/users',
    (json: UserProps)=> User.buildUser(json)
    )
collection.on('change', (data)=>{
    console.log(collection,data)
})
collection.fetch()