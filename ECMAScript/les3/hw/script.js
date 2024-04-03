
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(this.name, ',', this.department);
    }
}
const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600

// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:
// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.
// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).
// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.
class ZooAnimal {
    #name;
    #age;
    #gender;
    static #maxAge = 100;

    constructor(name, age, gender) {
        if (age <= ZooAnimal.#maxAge) {
            this.#name = name;
            this.#age = age;
            this.#gender = gender;
        } else {
            throw new Error('Invalid age');
        }
    }
    getName() { return this.#name; }
    setName(newName) { this.#name = newName; }
    getAge() { return this.#age; }
    setAge(newAge) {
        if (newAge <= ZooAnimal.#maxAge) {
            this.#age = newAge;
        } else {
            throw new Error('Invalid age');
        }
    }
    getGender() { return this.#gender; }
    setGender(gender) { this.#gender = gender; }
}
const dog = new ZooAnimal('Dog', 2, 'male');
console.log(dog.getName()); // Вывод: Dog
dog.setName('Dogg'); // Вывод: Cat
console.log(dog.getName());