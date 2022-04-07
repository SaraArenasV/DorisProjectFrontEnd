
export class Category{
    id: number;
    name:string;
    active:string;
    description: string;

    constructor(name:string,active:string, description:string){
        this.active=active;
        this.description=description;
        this.name=name;
    }
}