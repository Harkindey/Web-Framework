interface UserProps {
    name?: string;
    age?:number
}

type Callback = ()=>void


export class User {
    events: { [key:string]: Callback[]} = {};

    constructor(private data: UserProps ){}

    get(propName: string): string|number {
        return this.data[propName];
    }

    set (update:UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName:string, callback: Callback): void{
    {/* what i would have done
    
    */} 
            if(this.events[eventName] === undefined){
                this.events[eventName]=[callback]
            } else {
                this.events[eventName].push(callback)
            }

        // const handlers = this.events[eventName] || []; //nice nice
        // handlers.push(callback);
        // this.events[eventName] = handlers;
    }

    trigger(eventName: string){

    }
}
