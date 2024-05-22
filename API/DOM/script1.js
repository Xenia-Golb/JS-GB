// Напишите скрипт, который будет отслеживать изменение размеров окна браузера.
const height = document.querySelector('.height >span');
const widht = document.querySelector('.widht >span');

height.textContent = window.innerHeight + 'px';
widht.textContent = window.innerWidth + 'px';

window.addEventListener('resize', () => {
    height.textContent = window.innerHeight + 'px';
    widht.textContent = window.innerWidth + 'px';
});

wrapper = document.querySelector('.wrapper');
containerWrap = wrapper.querySelector('.container-wrap');
box = document.querySelector('.box');
wrapper.addEventListener('click', (e) => {
    if (e.target.closest('.add-button')) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = containerWrap.children.lenght + 1;
        containerWrap.append(box);
    } else if (e.target.closest('.remove-button')) {
        containerWrap.lastElementChild?.remove();
    } else if (e.target.classList.contains('.clone-button')) {
        if (wrapper.children.lenght > 0) {
            wrapper.append(containerWrap.lastElementChild.cloneNode(true));
        }
    }
});