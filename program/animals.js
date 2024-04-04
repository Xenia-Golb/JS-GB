// 14. Написать программу, имитирующую работу реестра домашних животных.
// В программе должен быть реализован следующий функционал: 
// 14.1 Завести новое животное
// 14.2 определять животное в правильный класс
// 14.3 увидеть список команд, которое выполняет животное
// 14.4 обучить животное новым командам 
//14.5 Реализовать навигацию по меню
// 15.Создайте класс Счетчик, у которого есть метод add(), увеличивающий̆ значение внутренней̆ int переменной̆ на 1 при нажатие “Завести новое животное” Сделайте так, чтобы с объектом такого типа можно было работать в блоке try-with-resources. Нужно бросить исключение, если работа с объектом типа счетчик была не в ресурсном try и/или ресурс остался открыт. Значение считать в ресурсе try, если при заведения животного заполнены все поля.

class Animal {
    #name;
    #age;
    #gender;
    constructor(name, age, gender, breed) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.breed = breed;
        this.animals = [];
    }
    setName(newName) {
        this.#name = newName;
    }
    getName() {
        return this.#name;
    }
    setAge(newAge) {
        this.#age = newAge;
    }
    getAge() {
        return this.#age;
    }
    setGender(newGender) {
        this.#gender = newGender;
    }
    getGender() {
        return this.#gender;
    }
    setBreed(newBreed) {
        this.breed = newBreed;
    }
    getBreed() {
        return this.breed;
    }
    setAnimals(newAnimals) {
        this.animals = newAnimals;
    }
    getAnimals() {
        return this.animals;
    }
    eat() {
        console.log(`My name is ${this.#name} , I eat!`);
    }
    voice() {
        console.log(`My name is ${this.#name} , I speak !`);
    }
    run() {
        console.log(`My name is ${this.#name} , Im running!`);
    }
    // addAnimal() {
    //     this.animals.push(new Animal(this.#name, this.#age, this.#gender, this.breed));
    //     console.log(`Животное в нашем питомнике: ${this.#name}, порода: ${this.breed}`);
    // }
    // showAnimals() {
    //     console.log(this.animals);
    // }
}


const dog1 = new Animal('Bobik', 2, 'Male', 'dog');
const dog2 = new Animal('Sharik', 2, 'Male', 'dog');
const cat1 = new Animal('Tom', 3, 'Male', 'cat');
const cat2 = new Animal('Murka', 3, 'Female', 'cat');
const hamster1 = new Animal('Homa', 3, 'Female', 'hamster');
const hamster2 = new Animal('Hom', 3, 'Male', 'hamster');
// dog1.addAnimal(dog1);
// dog1.run();
// dog1.voice();
// dog1.eat();
// dog2.addAnimal(dog2);
// cat1.addAnimal(cat1);
// cat2.addAnimal(cat2);
// hamster1.addAnimal(hamster1);
// hamster2.addAnimal(hamster2);
// dog1.showAnimals();
// dog2.showAnimals();



class Animals {
    animals = [];
    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.animals.push(new Animal(name, age, gender, breed));
        console.log(`Животное в нашем питомнике: ${this.animals[0].getName()}, порода: ${this.animals[0].getBreed()}`);
    }
    // addAnimal() {
    //     this.animals.push(new Animal(this.animals[0].getName(), this.animals[0].getAge(), this.animals[0].getGender(), this.animals[0].getBreed()));
    //     console.log(`Животное в нашем питомнике: ${this.animals[1].getName()}, порода: ${this.animals[1].getBreed()}`);
    // }
    showAnimals(animals) {
        console.log(this.animals);
    }
}

// class Dog extends Animal {
//     constructor(name, age, gender, breed) {
//         super(name, age, gender,);
//         this.breed = breed;
//         this.dogs = [];
//     }
//     addDog(breed) {
//         if (breed === 'dog') {
//             this.dogs.push(breed);
//             console.log(`Животное в нашем питомнике: ${this.getName}, порода: ${this.breed}`);
//         } else {
//             throw new Error('Это не дог!');
//         }
//     }
//     voice() {
//         console.log('Woof!');
//     }

// }
// class Cat extends Animal {
//     constructor(name, age, gender) {
//         super(name, age, gender);
//         this.breed = 'cat';
//         this.cats = [];
//     }
//     addCat(breed) {
//         if (breed === 'cat') {
//             this.cats.push(breed);
//             console.log(`Животное в нашем питомнике: ${this.getName}, порода: ${this.breed}`);
//         } else {
//             throw new Error('Это не кот!');
//         }
//     }
//     voice() {
//         console.log('Meow!');
//     }

// }
// class Hamster extends Animal {
//     constructor(name, age, gender) {
//         super(name, age, gender);
//         this.breed = 'hamster';
//         this.hamsters = [];
//     }
//     addHamster(breed) {
//         if (breed === 'hamster') {
//             this.hamsters.push(breed);
//             console.log(`Животное в нашем питомнике: ${this.getName}, порода: ${this.breed}`);
//         } else {
//             throw new Error('Это не хомяк!');
//         }
//     }
//     voice() {
//         console.log('I`m hamster!');
//     }
// }
