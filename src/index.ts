import { User } from "./models/User";

const user = new User({name: 'Kuso', age: 20})

user.save()
user.events.on('change', () => {console.log('change')})
user.events.trigger('change')