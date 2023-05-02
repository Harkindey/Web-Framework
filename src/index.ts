import { Collections } from "./models/Collection"
import { User, UserProps } from "./models/User"

const collection = User.buildUserCollection();
collection.on('change', (data)=>{
    console.log(collection,data)
})
collection.fetch()