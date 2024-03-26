// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0 && i != 0) {
        console.log(`${i} – четное число`);
    }
    else if (i % 2 != 0) {
        console.log(`${i} – нечетное число`);
    }
    else if (i === 0) {
        console.log(`${i} – это ноль`);
    }
}

// Задание 2
// Дан массив
const arr = [1, 2, 3, 4, 5, 6, 7];
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
arr.splice(3, 2);
console.log(arr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
const arr1 = [];
for (let i = 0; i < 5; i++) {
    arr1[i] = Math.floor(Math.random() * 10);
}
console.log(arr1);
// 1. Рассчитать сумму элементов этого массива
const sum = arr1.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
}, 0);
console.log(sum);
// 2. Найти минимальное число
const min = Math.min.apply(null, arr1);
console.log(min);
// 3. Найти есть ли в этом массиве число 3
let result = arr1.filter(x => x === 3);
console.log(result);


// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let str = '';
for (let index = 1; index < 40; index += 2) {
    console.log(str += 'x');
}