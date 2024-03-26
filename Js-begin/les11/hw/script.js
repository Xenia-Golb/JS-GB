const parseData = JSON.parse(data);
console.log(parseData);
const container = document.querySelector('div.container');
const catalog__cards = document.querySelector('div.catalog__cards');
console.log(catalog__cards);
const template = news__template.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('img.card__img').src = element.img;
    newTemplate.querySelector('div.card__tit').innerHTML = element.title;
    newTemplate.querySelector('div.card__info').innerHTML = element.info;
    newTemplate.querySelector('div.card__price').innerHTML = element.price;
    container.appendChild(newTemplate);
});