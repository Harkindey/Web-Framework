import axios,{AxiosResponse} from 'axios';
import { UserProps } from './User';
export class Sync{

    fetch():void {
        axios.get<UserProps>(`http://localhost:3000/users/${this.get('id')}`).then((response):void=>{
            this.set(response.data)
        })
    }

    save():void {
        const id = this.get('id')
         if(id){
            axios.put<UserProps>(`http://localhost:3000/users/${id}`, this.data)
         }else {
            axios.post<UserProps>('http://localhost:3000/users', this.data)
         }
    }
}