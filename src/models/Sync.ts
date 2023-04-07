import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';
export class Sync{
    constructor(public rootUrl: string) {}
    // data: UserProps

    fetch(id:number): AxiosPromise<UserProps>{
        return axios.get<UserProps>(`${this.rootUrl}/${id}`)
    }

    save(data:UserProps):AxiosPromise {
        const { id } = data
         if(id){
           return axios.put<UserProps>(`${this.rootUrl}/${id}`, data)
         }else {
           return axios.post<UserProps>(this.rootUrl, data)
         }
    }
}