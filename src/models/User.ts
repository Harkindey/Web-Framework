import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collections } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

export interface UserProps { 
    id?: number
    name?: string;
    age?:number
}
const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildUser(attrs:UserProps):User{
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        )
    }

    static buildUserCollection(): Collections<User, UserProps>{
        return new Collections<User,UserProps>(
            rootUrl,
            (json: UserProps)=> User.buildUser(json)
            )
    }

    isAdminUser(): boolean {
        return this.get('id') === 1;
    }
}
