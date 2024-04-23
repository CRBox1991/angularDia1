import { Book } from "./book";
import { User } from "./user";



export class Respuesta {

    constructor(public error: boolean,
                public codigo: number,
                public mensaje: string,
                public dataBook: Book [],
                public dataUser: User){}
}
