import axios,{AxiosResponse} from 'axios';
interface UserProps { 
    id?: number
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
    if(this.events[eventName] === undefined){
                this.events[eventName]=[callback]
            } else {
                this.events[eventName].push(callback)
            }
    */} 
            
        const handlers = this.events[eventName] || []; //nice nice
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string):void {
        const handlers = this.events[eventName];

        if(!handlers || handlers.length=== 0){
            return
        }

        handlers.forEach(callback=>{
            callback();
        })
    }

    fetch():void {
        axios.get<UserProps>(`http://localhost:3000/users/${this.get('id')}`).then((response):void=>{
            this.set(response.data)
        })
    }

    save():void {
        const id =this.get('id')
         if(id){
            axios.put<UserProps>(`http://localhost:3000/users/${id}`, this.data)
         }else {
            axios.post<UserProps>('http://localhost:3000/users', this.data)
         }
    }
}
