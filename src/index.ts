import { Collections } from "./models/Collection"

const collection = new Collections('http://localhost:3000/users')
collection.on('change', (data)=>{
    console.log(collection,data)
})
collection.fetch()