import { UserProps } from "./User";

export class Attributes<T> {
    constructor(private data: T ){}
    get(propName: string): T[keyof T] {
        return this.data[propName];
    }

    set (update:T): void {
        Object.assign(this.data, update);
    }
}

const attr = new Attributes<UserProps>({id: 5, name:'sfggg', age: 20})

const id = attr.get('id')