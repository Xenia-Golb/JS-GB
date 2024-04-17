'use strict';

const path = require('path');
const fs = require('fs');

// const Person = {
//     'name': 'John',
//     'surname': 'Ivanov',
//     'age': 30,
//     'city': 'Sofia'
// }

const pathToFile = path.join(__dirname, 'person.json');

// fs.writeFileSync(pathToFile, JSON.stringify(Person, null, 2));

const userData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
userData.age -= 10;
userData.city = 'Ekaterinburg';

fs.writeFileSync(pathToFile, JSON.stringify(userData, null, 2));
console.log(userData);