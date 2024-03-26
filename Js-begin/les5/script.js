// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
const week = {
    '1': 'Понедельник',
    '2': 'Вторник',
    '3': 'Среда',
    '4': 'Четверг',
    '5': 'Пятница',
    '6': 'Суббота',
    '7': 'Воскресенье'
};
console.log(week[2]);
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
const user = {
    'name': 'ivan',
    'surname': 'ivanov',
    'age': '20'
};
console.log(user.name + ' -', user.surname + ' -', user.age);
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// user.fatherName = prompt("Enter fatherName");
console.log(user.name + ' -', user.surname + ' -', user.age + ' -', user.fatherName);
// 4. Удалите свойство surname
delete user.surname;
console.log(user);


// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера. 
const obj1 = { x: 1, y: 2, z: 3 };
console.log(obj1);
for (const key in obj1) {
    obj1[key] = obj1[key] * obj1[key];
}
console.log(obj1);

for (let [key, value] of Object.entries(obj1)) {
    obj1[key] = value * value;
    console.log(key, value);
}
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// Задание 3 (тайминг 15 минут)
const obj2 = {
    key1: {
        key1: 1, key2: 2, key3: 3,
    }, key2: {
        key1: 4, key2: 5, key3: 6,
    }, key3: {
        key1: 7, key2: 8, key3: 9,
    },
}
// Найдите сумму элементов приведенного объекта.
let sum = 0;
for (let [key, value] of Object.entries(obj2)) {
    for (let [key1, value1] of Object.entries(value)) {
        sum = sum + value1
    }
}
console.log(sum);

// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

let riddles = {
    question: 'Как меня зовут?',
    answer: 'Миша',
    askQuestion: function () {
        (userAnswer = prompt(this.question) === this.answer) ? console.log("Верно!") : console.log("Попробуйте еще раз!");
    }
};
riddles.askQuestion();