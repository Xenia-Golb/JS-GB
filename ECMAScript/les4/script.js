const myPromise = new Promise((resolve, reject) => { });
console.log(myPromise);
myPromise.then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));;
fetch('https://api.github.com/')
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(json => console.log(json))
    .catch(err => console.log(`ошибка`));

const getData = async () => {
    try {
        const rest = await fetch('https://api.github.com/');
        const data = await rest.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
const fetchData = await getData();
console.log(fetchData);

