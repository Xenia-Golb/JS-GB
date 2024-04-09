const token = '9dC5gLUhwvDyPqPdYcCt8e8KkJLAhN0TrBD5FTWx';
const url = 'https://api.nasa.gov/planetary/apod?api_key=' + token + '&count=10';
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


const body = document.querySelector('body');

result.forEach(element => {
    body.insertAdjacentHTML('beforeend', `<figure>
<img src="${element.url}">
<figcaption>${element.explanation}</figcaption>
</figure>`)
});