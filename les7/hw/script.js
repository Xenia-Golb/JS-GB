// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const superEl = document.querySelectorAll('.dropdown-item');
console.log(superEl);
superEl.forEach(element => {
    element.setAttribute('class', element.classList + ' super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnEl = document.querySelector('.btn');
console.log(btnEl);
if (btnEl.classList.contains('btn-secondary')) {
    btnEl.classList.remove('btn-secondary');
} else {
    btnEl.setAttribute('class', btnEl.classList + ' btn-secondary');
}
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuClassEl = document.querySelector('.menu')
console.log(menuClassEl);
if (menuClassEl.classList.contains('menu')) {
    menuClassEl.classList.remove('dropdown-menu');
}

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const linkElDrop = document.querySelector('div.dropdown');
console.log(linkElDrop);
linkElDrop.insertAdjacentHTML('afterbegin', `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
document.getElementById('dropdownMenuButton').id = 'superDropdown';

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const getElAtt = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
console.log(getElAtt);
getElAtt.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const delAtt = document.querySelector('.dropdown-toggle');
console.log(delAtt);
delAtt.removeAttribute('type');