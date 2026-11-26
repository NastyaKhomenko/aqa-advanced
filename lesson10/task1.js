
import Book from "./Book.js";
import EBook from "./Ebook.js";

const book1 = new Book("Воно", "Стівен Кінг", 1986);
const book2 = new Book("Керрі", "Стівен Кінг", 1974);
const book3 = new Book("Сяйво", "Стівен Кінг", 1977);

const ebook1 = new EBook("Четверте крило", "Ребека Ярос", 2023, "PDF");

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

book1.title = "Лісова пісня";
book1.author = "Леся Українка"
book1.year = 1911;
ebook1.format = "EPUB";

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(ebook1.format);

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("Найдавніша книга:");
oldestBook.printInfo();

const ebook2 = EBook.createEBook(book2, "PDF");

console.log("Нова електронна книга:");
ebook2.printInfo();
