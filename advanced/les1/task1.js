'use strict';

/*
Задание 1: 
Необходимо создать механизм для безопасного добавления метаданных к объектам 
книг с использованием ключей типа Symbol. Для чего необходимо:
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут 
необходимы для работы кода ниже.
*/

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * Метод извлекает из объекта значение под свойством metadataType 
     * и возвращает его.
     * @param {Symbol} metadataType 
     * @returns {Array}
     */
    getMetadata(metadataType) {
        if (this[metadataType]) {
            return this[metadataType];
        }
        return [];
    }

    /**
     * Метод добавляет в объект массив под ключом metadataType, со значением 
     * data внутри. Если массив под данным свойством уже существует, 
     * тогда data просто будет добавлен в данный массив.
     * @param {Symbol} metadataType 
     * @param {any} data
     */
    addMetadata(metadataType, data) {
        if (!this[metadataType]) {
            this[metadataType] = [];
        }
        this[metadataType].push(data);
    }

    getAverageRating() {
        if (!this[ratingSymbol]) {
            return 0;
        }
        const sum = this[ratingSymbol].reduce((acc, count) => acc + count, 0);
        const avg = sum / this[ratingSymbol].length;
        return Math.round(avg * 10) / 10;
    }

    hasTag(name) {
        if (!this[tagsSymbol]) {
            return false;
        }
        return this[tagsSymbol].includes(name);
    }

    reviewsCount() {
        if (!this[reviewSymbol]) {
            return 0;
        }
        return this[reviewSymbol].length;
    }
}

const book = new Book("1984", "George Orwell");
book.addMetadata(reviewSymbol, "Отличная книга о дистопии!");
book.addMetadata(reviewSymbol, "Книга отстой, не покупайте ее.");
book.addMetadata(ratingSymbol, 5);
book.addMetadata(ratingSymbol, 4);
book.addMetadata(ratingSymbol, 4);

// ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
console.log(book.getMetadata(reviewSymbol));
console.log(book.getMetadata(ratingSymbol)); // [5, 4, 4] 
console.log(book.getMetadata(tagsSymbol)); // []

book.addMetadata(tagsSymbol, "novel");
book.addMetadata(tagsSymbol, "dystopia");
console.log(book.getMetadata(tagsSymbol)); // ["novel", "dystopia"]

console.log(book.getAverageRating()); // 4.3
console.log(book.hasTag("novel")); // true
console.log(book.hasTag("blockbuster")); // false
console.log(book.reviewsCount()); // 2