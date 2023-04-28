import { Eventing } from "./Eventing";
import { User } from "./User";

 export class Collections {
    models: User[] = [];
    events: Eventing = new Eventing();
    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
 }