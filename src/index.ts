import { User } from "./models/User";

const user = new User({name:'Beanne', age: 20})

user.on('change', ()=>{
console.log('change #1')
})

user.on('change', ()=>{
    console.log('change #2')
})

user.on('click', ()=>{
    console.log('Was clicked')
})

user.trigger('click')

// console.log(user);