const express = require('express');
const app = express();

const port = 8080;

const path = require('path');
const fs = require('fs');


const pathToFile = path.join(__dirname, 'counter.json');
const counterData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

app.get('/', (req, res) => {
    counterData['/'] = counterData['/'] + 1;
    fs.writeFileSync(pathToFile, JSON.stringify(counterData, null, 2));
    const htmlHome = `<h1>Hello World!</h1>
    <p>Просмотров: ${counterData['/']}</p>
    <a href="/about">About</a>`
    res.send(htmlHome)
})

app.get('/about', (req, res) => {
    counterData['/about'] = counterData['/about'] + 1;
    fs.writeFileSync(pathToFile, JSON.stringify(counterData, null, 2));
    const htmlAbout = `<h1>About!</h1>
    <p>Просмотров: ${counterData['/about']}</p>
    <a href='/'>Home</a>`
    res.send(htmlAbout)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});