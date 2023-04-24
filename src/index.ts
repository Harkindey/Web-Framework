import { User } from "./models/User";

const user = new User({name: 'Kuso', age: 20})
// console.log(user.get('name'))

// Reminder of how 'this' works

const colors = {
    color:'red',
    printColor(){
        console.log(this.color)
    }
}

colors.printColor()

const printColor = colors.printColor
printColor()