const productData = [
    {
        id: 1,
        name: 'ноутбук',
        category: 'electronics',
    },
    {
        id: 2,
        name: 'телефон',
        category: 'electronics',
    },
    {
        id: 3,
        name: 'Война и мир',
        category: 'books',
    },
    {
        id: 4,
        name: 'рубашка',
        category: 'clothes',
    },
    {
        id: 5,
        name: 'сумка',
        category: 'clothes',
    },
    {
        id: 6,
        name: 'штаны',
        category: 'clothes',
    },
    {
        id: 7,
        name: 'клавиатура',
        category: 'electronics',
    },
    {
        id: 8,
        name: 'Великий Гэтсби',
        category: 'books',
    },
    {
        id: 9,
        name: 'Война Миров',
        category: 'books',
    },
    {
        id: 10,
        name: 'сумка',
        category: 'clothes',
    }
];
const productsEl = document.querySelector('.products');
// const showProducts = () => {
//     for (const product of productData) {
//         console.log(product);
//         productsEl.innerHTML += `
//             <div class="product">
//                 <h1>${product.name}</h1>
//                 <p>${product.category}</p>
//             </div>
//         `;
//     }
// }
const createProductHTML = (products) => {
    return products
        .map((product) => {
            `
            <div data-id = ${product.id}>
            <h1>${product.name}</h1>
            <p>${product.category}</p>
        </div>`}).join('');
}


const productHTML = createProductHTML(productData);
productsEl.innerHTML = productHTML;
const selectEl = document.querySelector('#products-list');
selectEl.addEventListener('change', () => {
    const selectedCategory = selectEl.value;
    const products = getProductByCategory(selectedCategory);
    const productHTML = createProductHTML(products);
    productsEl.innerHTML = productHTML;
});
const getProductByCategory = (category) => {
    if (category === 'all') {
        return productData;
    }
    return productData.filter((product) => product.category === category);
}