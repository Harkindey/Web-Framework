export type Callback = (cbOject?:any)=>void
export class Eventing{
    events: { [key:string]: Callback[]} = {};
    on=(eventName:string, callback: Callback): void =>{
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

     
    
        trigger =(eventName: string, eventObject: any):void =>{
            const handlers = this.events[eventName];
    
            if(!handlers || handlers.length=== 0){
                return
            }
    
            handlers.forEach(callback=>{
                callback(eventObject);
            })
        }
}