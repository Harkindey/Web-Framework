import { User } from "./models/User";

const user = new User({name: 'Kuso', age: 20})

user.attributes.data
user.sync.save()