export class Book {

    constructor(public title: string,
                public type: string,
                public author: string,
                public price: number,
                public photo: string,
                public book_id: number = 0,
                public user_id: number = 0,){
    }
}
