const url = 'https://jsonplaceholder.typicode.com/users';
const getData = async (url) => {
    try {
        const rest = await fetch(url);
        const data = await rest.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
const result = await getData(url);
console.log(result);
const data = localStorage.setItem('users', JSON.stringify(result));
const saveUsers = JSON.parse(localStorage.getItem('users')) || [];

const body = document.querySelector('body');
const contentBox = document.createElement('div');
contentBox.setAttribute('class', 'content-box');
body.appendChild(contentBox);

saveUsers.forEach(element => {
    contentBox.insertAdjacentHTML('beforeend', `<figure>
    <div> ${element.name} </div>
    <div> ${element.username} </div>
    <div> ${element.email} </div>
    <div> ${element.address.street} <br>
    ${element.address.suite} <br>
    ${element.address.city} <br>
    ${element.address.zipcode}
    </div>
    <div> ${element.phone} </div>
    <div>${element.website}  </div>
</figure>`)
});
const figureEls = document.querySelectorAll('figure');
figureEls.forEach(element => {
    element.addEventListener('click', function (e) {
        element.classList.add('active');
        element.remove();
    });
});

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
const url1 = 'https://dog.ceo/api/breeds/image/random/10';
const getData1 = async (url1) => {
    try {
        const rest = await fetch(url1);
        const data = await rest.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
const res = await getData1(url1);
console.log(res);
const data1 = localStorage.setItem('dogs', JSON.stringify(res));
const saveDogs = JSON.parse(localStorage.getItem('dogs')) || [];
const dogsBox = document.createElement('div');
dogsBox.setAttribute('class', 'dogs-box');
body.appendChild(dogsBox);
saveDogs.message.forEach(el => {
    dogsBox.insertAdjacentHTML('beforeend', `<figure>
    <img src="${el}">
</figure>`)
});