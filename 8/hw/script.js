// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function () {
    console.log('все теги прогрузились');
});
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = () => {
    console.log('страница загрузилась')
}

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const bodyClass = document.querySelector('body');
console.log(bodyClass);
bodyClass.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('super_element')) {
        console.log('присутствует класс "super_element"');
    } else {
        console.log('отсутствует класс "super_element"');
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const hoverTxt = document.querySelector('textarea');
hoverTxt.addEventListener('mouseover', function (e) {
    console.log('Вы навели на textarea');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulClick = document.querySelector('ul');
console.log(ulClick);
ulClick.addEventListener('click', function (e) {
    console.log(e.target);
});

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liEls = ulClick.querySelectorAll('li');
for (let index = 1; index < liEls.length; index += 2) {
    liEls[index].style.background = "blue";
}