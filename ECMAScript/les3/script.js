// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.
const obj1 = {
    a: 1
};
const getPrototypeChain = (obj) => {
    let array = [];
    while (obj !== null) {
        array.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return array;
}
console.log(getPrototypeChain(obj1));
console.log(obj1);


// Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    }
}

const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.


// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`I am ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} , породы ${this.breed} принесла мяч.`);
    }
}
const animal1 = new Animal('Lucy');
animal1.speak(); // Вывод: I am Lucy
const dog1 = new Dog('Rex', 'Labrador');
dog1.speak(); // Вывод: I am Rex
dog1.fetch(); // Вывод: Собака Rex , породы Labrador принесла мяч.

// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
class User {
    #name;
    #age;
    #email;
    static #maxAge = 100;
    constructor(name, age, email) {
        this.#name = name;
        if (age <= User.#maxAge) {
            this.age = age;
            this.email = email;
        } else {
            throw new Error('Invalid age');
        }
        this.#age = age;
        this.#email = email;
    }
    getName() { return this.#name; }
    setName(name) { this.#name = name; }
    getAge() { return this.#age; }
    setAge(age) {
        if (age <= User.#maxAge) {
            this.age = age;
            this.email = email;
        } else {
            throw new Error('Invalid age');
        }
    }
    getEmail() { return this.#email; }
    setEmail(email) { this.#email = email; }

}
const user1 = new User('John', 25, '<EMAIL>');
console.log(user1.getName()); // Вывод: John
console.log(user1.getAge()); // Вывод: 25
console.log(user1.getEmail()); // Вывод: <EMAIL>
user1.setName('Jane'); // Вывод: Jane
console.log(user1.getName());

const user2 = new User('Johnny', 65, '<EMAIL>');

// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.
class Product {
    static #maxCount = 100;
    #name;
    #price;
    #quantity;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        if (quantity > Product.#maxCount) {
            throw new Error(`Max quantity is ${Product.#maxCount}`);
        }
        if (quantity < 0) {
            throw new Error(`Min quantity is 0`);
        }
        this.#quantity = quantity;
    }

    get name() { return this.#name; }
    set name(value) { this.#name = value; }
    get price() { return this.#price; }
    set price(value) { this.#price = value; }
    get quantity() { return this.#quantity; }
    setQuantity = (value) => {
        if (value > Product.#maxCount) {
            throw new Error(`Max quantity is ${Product.#maxCount}`);
        }
        if (value < 0) {
            throw new Error(`Min quantity is 0`);
        }
        this.#quantity = value;
    }
}

const iPhone = new Product('iPhone', 100000, 10);
console.log(iPhone.name);
console.log(iPhone.price);
console.log(iPhone.quantity);

iPhone.setQuantity(50);
console.log(iPhone.quantity);

const Samsung = new Product('Samsung', 50000, -5);