import { Book } from "./entities/BookClass.js";
import { Library } from "./entities/LibraryClass.js";

let book1 = new Book("Harry Potter", "JK", "editorajjsjjd", 2010);
let book2 = new Book("Peter pan", "louis", "editoranaosei", 2003);
let book3 = new Book("Pequeno principe", "henry", "editordontKnow", 1990);

let booksArray = [book1, book2, book3];

let library = new Library("Saraiva", "Brazil", 559944566, booksArray);

library.searchBook("Harry Potter");
library.takeBook("Peter pan");
console.log(book2);
library.giveBack("Peter pan");
console.log(book2);