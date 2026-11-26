
export default class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Назва не може бути порожньою");
        }
        this.#title = value;
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Автор не може бути порожнім");
        }
        this.#author = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
            throw new Error("Рік має бути додатним числом");
        }
        this.#year = value;
    }

    printInfo() {
        console.log(
            `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`
        );
    }

    static findOldestBook(books) {
        return books.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }
}
