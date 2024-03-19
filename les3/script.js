// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)

function getInfo(firstName, lastName, age) {
    return console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
}
getInfo('Ксения', 'Голбрайх', 24);

// 2. Создайте функцию которая возводит переданное число в квадрат

const getSquareNumber = num => num * num;
console.log(getSquareNumber(5));

// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

const getNumber = (number) => console.log((number > 0) ? '+++' : '---');
const getNumber2 = (number) => {
    let res = (number > 0) ? '+++' : '---';
    return console.log(res);
}
getNumber(5);
getNumber2(-5);


// Задание 2 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
const sum1 = (param1, param2, param3) => {
    return console.log(res = param1 + param2 + param3);
}
sum1(2, 3, 4);

// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.

let param1 = 1; let param2 = 2; let param3 = 3;
sum1(param1, param2, param3);

// 1. Дана фукнция
function func(num = 5) {
    console.log(num * num);
}
// Расскажите, каким будет результат каждого из вызовов функции.
func(2); //4
func(3); //9
func(); //25

// Задание 3 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
const sqrtSum = (num1, num2) => {
    (num1 && num2 > 0) ? console.log(Math.sqrt(num1) + Math.sqrt(num2)) : console.log("Введите положительное число");
}
sqrtSum(25, 49);
// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
const getMin = (param1, param2) => {
    return console.log(Math.min(param1, param2));
}
getMin(555, 79);

// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
const getDay = (numDay = prompt("Введите цифру от 1 до 7")) => {
    switch (numDay) {
        case '1':
            console.log("Понедельник");
            break;
        case '2':
            console.log("Вторник");
            break;
        case '3':
            console.log("Среда");
            break;
        case '4':
            console.log("Четверг");
            break;
        case '5':
            console.log("Пятница");
            break;
        case '6':
            console.log("Суббота");
            break;
        case '7':
            console.log("Воскресенье");
            break;
        default:
            console.log("Введите цифру от 1 до 7");
    }
}
getDay();

// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
let getHello = (name) => {
    time = new Date().getHours();
    switch (time) {
        case time >= 24 && time < 8:
            console.log("Доброй ночи!");
            break;
        case time >= 8 && time < 12:
            console.log("Доброе утро!");
            break;
        case time >= 12 && time < 18:
            console.log("Добрый день!");
            break;
        case time >= 18 && time < 22:
            console.log("Добрый вечер!");
            break;
        default:
            console.log("Ошибка!");
    }
}
getHello("Ivan");
let hello = name => {
    let result = null;
    let time = new Date().getHours();
    if (time < 10 && time > 6) {
        result = `Доброе утро ${name}`;
    } else if (time < 18 && time > 9) {
        result = `Добрый день ${name}`;
    } else if (time < 23 && time > 17) {
        result = `Добрый вечер ${name}`;
    } else result = `Доброй ночи ${name}. Иди спать!`;
    return result;
}

console.log(hello("Valerii"));;