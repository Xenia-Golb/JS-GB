'use strict';
//1
const menuel = document.querySelector('.menu');

menuel.addEventListener('click', ({ target }) => {
    if (!target.closest('.menu-link')) {
        return;
    }
    menuel.querySelector('.menu-link.active')?.classList.remove('active');
    target.classList.add('active');
});

// 2
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.btn.close');
const modalOpen = document.querySelector('.btn.open');


modalOpen.addEventListener('click', () => {
    modal.classList.add('actives');
});
modalClose.addEventListener('click', () => {
    modal.classList.remove('actives');
});

//3
const buyBtn = document.querySelector('.btn.buy');
buyBtn.addEventListener('click', (event) => {
    if (!event.isTrusted) {
        return;
    }
    buyBtn.textContent = 'Товар добавлен в корзину';
    setTimeout(() => {
        buyBtn.textContent = 'Купить';
    }, 2000);
});

//4
