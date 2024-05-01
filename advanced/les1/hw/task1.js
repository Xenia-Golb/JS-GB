'use strict';
// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const title = Symbol('title');
const artist = Symbol('artist');
const year = Symbol('year');

const musicCollection = [
    {
        title: "Ugly is beautiful",
        artist: "Oliver Tree",
        year: 2020
    },
    {
        title: "The best of Oliver Tree",
        artist: "Oliver Tree",
        year: 2020
    },
    {
        title: "Cowboy Tears",
        artist: "Oliver Tree",
        year: 2022
    }

]
const iterator = musicCollection[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



for (const album of musicCollection) {
    console.log(album.title, album.year);
}