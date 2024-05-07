const data = JSON.parse(dataInfo);
console.log(data);
const container = document.querySelector('.container');
console.log(container);
data.forEach(element => {
    const product = document.createElement('div');
    const imgEl = document.createElement('img');
    const h1El = document.createElement('h1');
    const pEl = document.createElement('p');
    imgEl.src = element.url;
    imgEl.style.widht = element.widht + "px";
    imgEl.style.height = element.height + "px";
    h1El.textContent = element.heading;
    pEl.textContent = element.paragraph;

    container.appendChild(product);
    product.classList.add(element.class);

    product.appendChild(imgEl);
    product.appendChild(h1El);
    product.appendChild(pEl);

});


