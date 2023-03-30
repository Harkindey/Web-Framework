import { User } from "./models/User";

const user = new User({name:'Beanne', age: 20})

user.set({name:'Hanjo'})

console.log(user.get('name'))
console.log(user.get('age'))