// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
const container = document.querySelector('.container');
// const checkEl = document.createElement('input');
// checkEl.type = 'checkbox';
// checkEl.id = 'agreement';
// const labelEl = document.createElement('label');
// labelEl.innerHTML = 'Согласен с условиями';
// labelEl.for = 'agreement';
// container.appendChild(labelEl);
// container.appendChild(checkEl);
// const butEl = document.createElement('button');
// butEl.innerText = 'Отправить';
// container.appendChild(butEl);
// butEl.addEventListener('click', function (e) {
//     if (!checkEl.checked) {
//         const attention = document.createElement('p');
//         attention.innerText = 'Необходимо согласиться с условиями';
//         attention.style.color = 'red';
//         container.appendChild(attention);
//     }
// });

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”
// const radioButEl1 = document.createElement('input');
// radioButEl1.type = 'radio';
// radioButEl1.id = 'radio1';
// radioButEl1.name = 'drink';
// const labelElRadio1 = document.createElement('label');
// labelElRadio1.innerHTML = 'Чай';
// labelElRadio1.for = 'radio1';
// container.appendChild(labelElRadio1);
// container.appendChild(radioButEl1);
// const radioButEl2 = document.createElement('input');
// radioButEl2.type = 'radio';
// radioButEl2.id = 'radio2';
// radioButEl2.name = 'drink';
// const labelElRadio2 = document.createElement('label');
// labelElRadio2.innerHTML = 'Кофе';
// labelElRadio2.for = 'radio2';
// container.appendChild(labelElRadio2);
// container.appendChild(radioButEl2);
// container.appendChild(butEl);
// butEl.addEventListener('click', function (e) {
//     if (radioButEl1.checked) {
//         const selectedTea = document.createElement('p');
//         selectedTea.innerText = 'Чай закончился';
//         container.appendChild(selectedTea);
//     } else if (radioButEl2.checked) {
//         const selectedCoffee = document.createElement('p');
//         selectedCoffee.innerText = 'Кофе закончился';
//         container.appendChild(selectedCoffee);
//     }
// });

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
const passEl = document.createElement('input');
passEl.type = 'password';
const labelElPass = document.createElement('label');
labelElPass.innerHTML = 'Введите пароль';
container.appendChild(labelElPass);
container.appendChild(passEl);
const butEl = document.createElement('button');
butEl.innerText = 'Отправить';
container.appendChild(butEl);

butEl.addEventListener('click', function (e) {
    if (passEl.value.toLocaleLowerCase() === 'password') {
        passEl.classList.remove('red_border')
        passEl.classList.add('green_border')
    } else {
        passEl.classList.remove('green_border')
        passEl.classList.add('red_border')
    }
});

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
const inputTxt = document.createElement('input');
inputTxt.type = 'text';
const titTxt = document.createElement('h1');
titTxt.innerText = 'Заголовок';
container.appendChild(inputTxt);
container.appendChild(titTxt);
inputTxt.addEventListener('change', function (e) {
    titTxt.innerHTML = e.target.value;
});


