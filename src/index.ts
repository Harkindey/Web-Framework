import { User } from "./models/User";

const user = new User({ name:'Akin', age:0})
console.log(user.get('name'))

user.on('save', ()=>{
    console.log(user);
})

user.save();