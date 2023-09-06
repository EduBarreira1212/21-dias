export class Library{
    constructor(name, adress, phone, booksArray){
        this.Name = name;
        this.Adress = adress;
        this.Phone = phone;
        this.Books = booksArray; 
    }

    searchBook(bookName){
        let book = this.Books.find(book => book.Title == bookName);
        console.log(book);
    }

    takeBook(bookName){
        let book = this.Books.find(book => book.Title == bookName);
        if (book.Available === true) {
            console.log("Ok!!");
            book.Available = false
        }else{
            return console.log("Error");
        }
    }

    giveBack(bookName){
        let book = this.Books.find(book => book.Title == bookName);
        book.Available = true;
    }
}