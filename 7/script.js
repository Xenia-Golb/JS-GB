
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1(использовать setAttribute)

const divBlock = document.querySelector('div.block');
console.log(divBlock);
itemEl = document.createElement('div');
itemEl.setAttribute('class', 'item');
divBlock.appendChild(itemEl);
itemEl.textContent = 'Элемент внутри';
itemEl.setAttribute('class', itemEl.classList + ' item_1');

/* 
Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2
Вывести в консоль родительский элемент content
Вывести в консоль картинку
Вывести в консоль родительский элемент elem */

const findEl = document.querySelector('div.elem div.content p.text');
console.log(findEl);
console.log(findEl.previousElementSibling);
console.log(findEl.parentElement);
console.log(document.querySelector('div.elem img'));
console.log(document.querySelector('div.elem').parentElement);


// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
const headEl = document.querySelector('div.item div.elem div.info h2.subtitle');
let curEl = headEl;
while (curEl.parentElement != null) {
    curEl = curEl.parentElement;
    console.log(curEl);
}

// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const inputEl = document.querySelector('form input');
console.log(inputEl);
const butEl = document.querySelector('form .btn');
console.log(butEl);
butEl.addEventListener('click', () => {
    if (inputEl.value === '') {
        const newH2 = document.createElement('h2');
        newH2.textContent = 'вы не заполнили поле ввода';
        newH2.style.border = '1px solid red';
        inputEl.parentElement.appendChild(newH2);
    }
});







