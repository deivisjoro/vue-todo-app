export class Todo {

    constructor( description ){
        this.id          = Date.now() + Math.floor((Math.random() * 10));
        this.description = description;
        this.done        = false;
        this.createdAt   = new Date();
        this.updateAt    = new Date();
    }

}