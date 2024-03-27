
// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов. removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...rest) {
//     const arr = rest.filter((el, index) => {
//         return rest.indexOf(el) === index;
//     });
//     return arr;
// }
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// function removeDuplicates1(...rest) {
//     const arr3 = [...new Set(rest)];
//     return arr3;
// }
// console.log(removeDuplicates1(1, 2, 3, 2, 4, 1, 5));

//Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// function getEvenNumbers(arr) {
//     return arr.filter(el => el % 2 === 0);
// }
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));

// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// function calculateAverage(arr) {
//     return arr.reduce((el, acc) => el + acc) / arr.lenght;
// }
// console.log(calculateAverage([1, 2, 3]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function capitalizeFirstLetter(str) {
//     return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
// }

// console.log(capitalizeFirstLetter('qwerty hello mirror'));


//  Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.

// function createCalculator(def) {
//     return {
//         value: def,
//         add(num) {
//             this.value += num;
//             return this.value;
//         },
//         subtract(num) {
//             this.value -= num;
//             return this.value;
//         }
//     }
// }
// const obj = createCalculator(10);
// console.log(obj.add(2), obj.subtract(2));

// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(name) {
    return () => `Hello, ${name} !`
}
const greeting = createGreeting('John');
console.log(greeting());

// Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8); console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(passLenght) {
//     return (password) => password.lenght < passLenght;
// }
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password'));
// console.log(isPasswordValid('secret'));

//  Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3) console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
function sumDigits(num) {
    if (num < 10) {
        return num;
    } else {
        return num % 10 + sumDigits(Math.floor(num / 10))
    }
}
console.log(sumDigits(123));
console.log(sumDigits(456789));