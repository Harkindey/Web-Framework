
import { Attributes } from './Attributes';
import { Callback, Eventing } from './Eventing';
import { Sync } from './Sync';
export interface UserProps { 
    id?: number
    name?: string;
    age?:number
}

const rootUrl = 'http://localhost:3000/users'

export class User {
    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
    public attributes:Attributes<UserProps> = new Attributes<UserProps>({
        id:5, 
        name:'Bean', 
        age:27
    })

    constructor(attrs: UserProps){
        this.attributes = new Attributes<UserProps>(attrs)
    }

    on (eventName:string, callback: Callback): void{
        this.events.on(eventName, callback)

    }
}
