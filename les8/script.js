// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

//1 вариант
// window.onload = () => {
//     console.log('страница загрузилась');
//     const butEl = document.querySelector('.button');
//     butEl.onclick = (e) => {
//         console.log('событие onclick');
//     }
//     butEl.addEventListener('click', function (e) {
//         console.log('событие addEventListener');
//     })
// };
//2 вариант
document.addEventListener("DOMContentLoaded", function () {
    console.log('страница загрузилась');
    const butEl = document.querySelector('.button');
    butEl.onclick = (e) => {
        console.log('событие onclick');
    }
    butEl.addEventListener('click', function (e) {
        console.log('событие addEventListener');
    })
});

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
const containerEls = document.querySelector('div.container');
const butElem1 = document.createElement('button');
butElem1.innerHTML = 'button1';
const butElem2 = document.createElement('button')
butElem2.innerHTML = 'button2';
const butElem3 = document.createElement('button')
butElem3.innerHTML = 'button3';
containerEls.append(butElem1, butElem2, butElem3);
let clickFunc = function (e) {
    console.log(e.target.innerHTML);
};
butElem1.addEventListener('click', clickFunc);
butElem2.addEventListener('click', clickFunc);
butElem3.addEventListener('click', clickFunc);

const butElem4 = document.createElement('button');
butElem4.innerHTML = 'button4';
containerEls.appendChild(butElem4);

let counter = 1;
const counterFunc = () => {
    console.log(`click ${counter++}`);
}
butElem4.addEventListener('click', counterFunc);

const butElem5 = document.createElement('button');
butElem5.innerHTML = 'button5';
containerEls.appendChild(butElem5);

butElem5.addEventListener('click', function (e) {
    e.target.innerHTML = 'Вы нажали на эту кнопку';
});

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const btnEl1 = document.createElement('button');
btnEl1.innerHTML = '1 кнопка';
const btnEl2 = document.createElement('button');
btnEl2.innerHTML = '2 кнопка';
containerEls.append(btnEl1, btnEl2);

btnEl1.addEventListener('click', function (e) {
    const titleBut = document.createElement('h1');
    titleBut.innerHTML = 'Новый заголовок';
    containerEls.appendChild(titleBut);
});
btnEl2.addEventListener('click', function (e) {
    const delTit = document.querySelectorAll('h1');
    if (delTit.length > 0) {
        delTit[delTit.length - 1].remove();
    }
});

const btnEl3 = document.createElement('button');
btnEl3.innerHTML = '3 кнопка';
containerEls.appendChild(btnEl3);
btnEl3.addEventListener('mouseover', function (e) {
    console.log('Вы навели на данную кнопку');
});
btnEl3.addEventListener('mouseleave', function (e) {
    console.log('Наведения на кнопку больше нет');
});

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
const butLi = document.createElement('button');
butLi.innerHTML = 'Добавить новый элемент списка';
containerEls.prepend(butLi);
const ulEls = containerEls.querySelector('ul');

butLi.addEventListener('click', function (e) {
    const newLi = document.createElement('li');
    newLi.innerHTML = 'новый элемент списка';
    ulEls.appendChild(newLi);
});
const butLiDel = document.createElement('button');
butLiDel.innerHTML = 'Удалить элемент списка';
containerEls.prepend(butLiDel);

butLiDel.addEventListener('click', function (e) {
    let listLi = ulEls.querySelectorAll('li');
    if (listLi.length > 0) {
        listLi[0].remove();
    }
});

const addClass = document.createElement('button');
addClass.innerHTML = 'Добавить класс';
containerEls.prepend(addClass);

addClass.addEventListener('click', function (e) {
    e.target.classList.add('click')
});






