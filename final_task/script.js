const parseData = JSON.parse(data);
const container = document.querySelector('div.catalog');
const catalog__cards = document.querySelector('div.catalog__container');
console.log(catalog__cards);
const template = news__template.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('img.card__img').src = element.img;
    newTemplate.querySelector('div.card__tit').innerHTML = element.title;
    newTemplate.querySelector('div.card__info').innerHTML = element.info;
    newTemplate.querySelector('div.card__price').innerHTML = element.price;
    catalog__cards.appendChild(newTemplate);
});
const addToCart = document.querySelectorAll('button.card_but');

addToCart.forEach(element => {
    element.addEventListener('click', function (e) {
        cartItems.classList.add('cart-items');
        createDiv();
    });
});
const cartItems = document.querySelector('.cart-items');
const cartItemsTit = document.createElement('h1');
cartItemsTit.innerHTML = 'Cart Items';
cartItemsTit.classList.add('catalog__heading');
cartItems.appendChild(cartItemsTit);

function createDiv() {
    const containerItems = document.createElement('div');
    containerItems.classList.add('container-items');

    const imgItems = document.createElement('img');
    const divInfoItems = document.createElement('div');
    const titItems = document.createElement('h2');
    const priceItems = document.createElement('p');
    const colorItems = document.createElement('p');
    const sizeItems = document.createElement('p');
    const quantityItems = document.createElement('p');
    const svgClick = document.createElement('img');


    imgItems.src = "https://a.lmcdn.ru/img600x866/M/P/MP002XW0TO50_21820566_1_v1_2x.jpg";
    imgItems.width = '300';
    imgItems.height = '400';
    titItems.innerText = 'ELLEXY X MO CAPSULE';
    titItems.classList.add('textDecorTit');
    priceItems.innerHTML = 'price: 52$';
    priceItems.classList.add('textDecorTit');
    colorItems.innerHTML = 'color: red';
    colorItems.classList.add('textDecorTit');
    sizeItems.innerHTML = 'size: XL';
    sizeItems.classList.add('textDecorTit');
    quantityItems.innerHTML = 'quantity: 1';
    quantityItems.classList.add('textDecorTit');
    svgClick.src = "./img/cross-circled-svgrepo-com.svg";
    svgClick.width = '20';
    svgClick.height = '20';


    svgClick.addEventListener('click', function (event) {
        cartItems.remove();
    })

    cartItems.appendChild(containerItems);
    containerItems.appendChild(imgItems);
    containerItems.appendChild(divInfoItems);
    containerItems.appendChild(svgClick);
    divInfoItems.appendChild(titItems);
    divInfoItems.appendChild(priceItems);
    divInfoItems.appendChild(colorItems);
    divInfoItems.appendChild(sizeItems);
    divInfoItems.appendChild(quantityItems);
}

