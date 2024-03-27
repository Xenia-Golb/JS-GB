//  Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9]
console.log(Math.min(...arr));

//  Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter(def) {
    return {
        value: def,
        increment() {
            return this.value + 1;
        },
        decrement() {
            return this.value - 1;
        }
    }
}
const counter = createCounter(1);
console.log(counter.increment(), counter.decrement());

//  Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
        return element;
    }
    for (let child of element.children) {
        let result = findElementByClass(child, className);
        if (result) {
            return result;
        }
    }
    return null;
}

