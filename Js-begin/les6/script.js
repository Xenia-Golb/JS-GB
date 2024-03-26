//  Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
console.log(firstId = document.getElementById('block'));
// Получите ссылку на первый абзац с классом www. и вывести его в консоль 
console.log(firstClass = document.querySelector('.www'));

// Вам необходимо поменять текст внутри ссылки на “link text js”
const newLink = document.querySelector('a.link');
newLink.textContent = 'link text js';
// Заменить href, на значение https://developer.mozilla.org/ru/ 
newLink.href = "https://developer.mozilla.org/ru/ ";
console.log(newLink);
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// document.querySelector('img.photo').src = 'https://img.freepik.com/premium-photo/beautiful-daisy-flower-with-water-drops-on-blurred-background-nature-wallpaper-with-macro-photo_1314-3970.jpg?w=2000';

// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 
const newP = document.createElement('p');
newP.textContent = ('Новый текстовый элемент')
document.querySelector('div.content').appendChild(newP);
newP.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
const newBtn = document.createElement('button');
newBtn.textContent = 'click';
document.querySelector('div.content').appendChild(newBtn);
let counter = 1;
newBtn.addEventListener('click', (e) => {
    console.log(`вы накликали ${counter++} раз`);
    e.target.textContent = 'Текст отправлен';
})
// Дан тег < div class="content" ></div >
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”




