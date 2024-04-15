'use strict';

const sum = (param1, param2) => console.log(`Сумма чисел ${param1} и ${param2} равна ${param1 + param2}`);

const dif = (param1, param2) => console.log(`Разность чисел ${param1} и ${param2} равна ${Math.max(param1, param2) - Math.min(param1, param2)}`);

const div = (param1, param2) => console.log(`Частное чисел ${param1} и ${param2} равно ${param1 / param2}`);

const mult = (param1, param2) => console.log(`Произведение чисел ${param1} и ${param2} равно ${param1 * param2}`);

const sqr = (param) => console.log(`Квадрат числа ${param} равен ${param * param}`);
const cube = (param) => console.log(`Куб числа ${param} равен ${param * param * param}`)

const fib = (n) => console.log(`Число Фибоначчи от 1 до ${n} равно ${n <= 1 ? n : fib(n - 1) + fib(n - 2)}`);

function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return 'Уравнение не имеет реальных корней';
    } else if (discriminant === 0) {
        return 'Уравнение имеет один корень: ' + (-b / (2 * a));
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return 'Уравнение имеет два корня: ' + root1 + ' и ' + root2;
    }
}
console.log(solveQuadratic(1, -3, 2));
