import { User } from "./models/User";

const user = new User({name: 'Kuso', age: 20})

// quick reminder on accessors

class Person {
    constructor(public firstname: string, public lastname: string){}

   get fullName(): string {
        return `${this.firstname} ${this.lastname}`
    }
}

const person = new Person('firstname', 'lastname');
console.log(person.fullName);