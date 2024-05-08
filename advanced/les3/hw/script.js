const parseData = JSON.parse(data);
console.log(parseData);
const container = document.querySelector('.container');
const rewPage = document.querySelector('.rewPage');
const allRewPage = document.querySelector('.allRewPage');
const rewiews = JSON.parse(localStorage.getItem('rewiews')) || [];

parseData.forEach(element => {
    const product = document.createElement('div');
    const imgEl = document.createElement('img');
    const h1El = document.createElement('h1');

    const pEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const reviewBlock = document.createElement('div');
    const reviewBtn = document.createElement('button');
    reviewBtn.innerHTML = 'Добавить отзыв';
    reviewBtn.addEventListener('click', () => {
        addReviewPage();
    });

    h1El.addEventListener('click', (e) => {
        for (const rewiew of rewiews) {
            const addBlock = () => {
                const rewEl = document.createElement('div');
                rewEl.classList.add('rew');
                const titleEl = document.createElement('p');
                titleEl.textContent = rewiew.inputName + ':';
                const textEl = document.createElement('p');
                textEl.textContent = rewiew.inputRew;
                allRewPage.appendChild(rewEl);
                rewEl.appendChild(titleEl);
                rewEl.appendChild(textEl);
                rewEl.addEventListener('click', (e) => {
                    rewEl.remove(e.target)
                    rewiews.pop(e.target);
                    localStorage.setItem('rewiews', JSON.stringify(rewiews))
                })
            }
            if (e.target.textContent.toLowerCase() === 'eggs') {
                if (rewiew.inputName === 'eggs') {
                    addBlock();
                }
            } if (e.target.textContent.toLowerCase() === 'avokado') {
                if (rewiew.inputName === 'avokado') {
                    addBlock();
                }
            } if (e.target.textContent.toLowerCase() === 'coconut milk') {
                if (rewiew.inputName === 'coconut milk') {
                    addBlock();
                }
            }
        }
    });
    reviewBlock.appendChild(reviewBtn);

    imgEl.src = element.url;
    h1El.textContent = element.title;
    pEl.textContent = element.info;
    priceEl.textContent = element.price;

    container.appendChild(product);
    product.classList.add('product');

    product.appendChild(imgEl);
    product.appendChild(h1El);
    product.appendChild(pEl);
    product.appendChild(priceEl);
    product.appendChild(reviewBlock);
});
const allRewiewsEl = document.querySelector('.all-rewiews').addEventListener('click', () => {
    addAllRew();

});

const addReviewPage = () => {
    const boxRew = document.createElement('div');
    boxRew.classList.add('box-rew');

    const inputName = document.createElement('input');
    inputName.placeholder = 'Введите название товара здесь: '
    inputName.classList.add('input-name');

    const inputRew = document.createElement('input');
    inputRew.placeholder = 'Введите отзыв здесь: '
    inputRew.classList.add('input-rew');

    const btnRew = document.createElement('button');
    btnRew.innerHTML = 'Отправить';
    btnRew.addEventListener('click', () => {
        if (inputName.value.toLocaleLowerCase() === 'eggs' || inputName.value.toLocaleLowerCase() === 'avokado' || inputName.value.toLocaleLowerCase() === 'coconut milk') {
            rewiews.push({ "inputName": inputName.value, "inputRew": inputRew.value });
            localStorage.setItem('rewiews', JSON.stringify(rewiews))
            alert("Ваш отзыв улетел!")
        }
        else {
            alert('Вы ввели неправильное название товара')
        }
    })

    rewPage.appendChild(boxRew);

    boxRew.appendChild(inputName);
    boxRew.appendChild(inputRew);
    boxRew.appendChild(btnRew);


}

const addAllRew = () => {
    JSON.stringify(rewiews.forEach(rewiew => {
        const rewEl = document.createElement('div');
        rewEl.classList.add('rew');
        const titleEl = document.createElement('p');
        titleEl.textContent = rewiew.inputName + ':';
        const textEl = document.createElement('p');
        textEl.textContent = rewiew.inputRew;
        allRewPage.appendChild(rewEl);
        rewEl.appendChild(titleEl);
        rewEl.appendChild(textEl);
        rewEl.addEventListener('click', (e) => {
            rewEl.remove(e.target)
            rewiews.pop(e.target);
            localStorage.setItem('rewiews', JSON.stringify(rewiews))
        })
    }));
}

