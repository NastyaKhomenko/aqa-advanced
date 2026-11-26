
import Book from "./Book.js";

export default class EBook extends Book {
    #format;

    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this.#format;
    }

    set format(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Формат не може бути порожнім");
        }
        this.#format = value;
    }

    printInfo() {
        console.log(
            `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат: ${this.format}`
        );
    }

    static createEBook(book, format) {
        return new EBook(
            book.title,
            book.author,
            book.year,
            format
        );
    }
}
