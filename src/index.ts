import { User } from "./models/User";

const user = new User({name: 'Kuso', age: 20})
console.log(user.get('name'))

user.on('change', ()=>{
    console.log('User was changed, we probably need to update some HTML');
})

user.set({
    name:'Hanjo'
})
console.log(user.get('name'))