export class User {
    name: string;
    picture: string;
    age: number;
    quote: string;
    id?: number

    constructor(name: string, picture: string, age: number, quote: string) {
        this.name = name;
        this.picture = picture;
        this.age = age;
        this.quote = quote
    } 
}
