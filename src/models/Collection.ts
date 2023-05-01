import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";



 export class Collections {
    constructor(public rootUrl: string){}
    models: User[] = [];
    events: Eventing = new Eventing();
    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    fetch ():void{
        axios.get(this.rootUrl).then((response: AxiosResponse)=>{
            console.log(response)
            this.models = response.data.map((element: UserProps) => {
                console.log(element)
                return User.buildUser(element)
            });
            this.trigger('change', this.models)
        })    
    }
 }