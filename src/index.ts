import { User } from "./models/User";

const user = new User({name: 'Kuso', age: 20})

user.save()