
import { AxiosResponse } from 'axios';
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

    get on(){
        return this.events.on; // return a reference to the function
    }

    get trigger(){
        return this.events.trigger
    }

    get get(){
        return this.attributes.get
    }

    set(update: UserProps): void {
        this.attributes.set(update);
        this.events.trigger('change')
    }

    fetch():void {
        const id = this.attributes.get('id')
        if(typeof id !== 'number'){
            throw new Error('Cannot fetch without an id')
        }

        this.sync.fetch(id).then((response: AxiosResponse): void=>{
            this.set(response.data)
        })
    }

    save (): void {
        this.sync
        .save(this.attributes.getAll())
        .then((response:AxiosResponse)=>{
            this.trigger('save')
        }).catch(()=>{
            this.trigger('error')
        })
    }
}
