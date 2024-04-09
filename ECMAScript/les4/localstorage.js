const data = localStorage.setItem('myData', 'sample');
const data2 = localStorage.getItem('myData');
console.log(data2);
localStorage.removeItem('myData');
localStorage.user = {
    name: 'ivan',
}
console.log(localStorage.user);
console.log(localStorage.user = JSON.stringify({
    name: 'ivan'
}));
