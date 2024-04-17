const express = require('express');
const app = express();
const port = 8080;

const path = require('path');
const fs = require('fs');


app.get('/', (req, res) => {
    const pathToFileHome = path.join(__dirname, 'userCountHome.json');
    console.log(pathToFileHome);
    const userCountHomeData = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));

    res.send(`<h1>Hello World!</h1>
    <p>Счетчик просмотров сайта ${userCountHomeData.count} раз </p>
    <a href="/about">About</a>`)
})

app.get('/about', (req, res) => {
    const pathToFileAbout = path.join(__dirname, 'userCountAbout.json');
    console.log(pathToFileAbout);
    const userCountAboutData = JSON.parse(fs.readFileSync(pathToFileAbout, 'utf-8'));

    userCountAboutData.count = userCountAboutData.count + 1;

    fs.writeFileSync(pathToFileAbout, JSON.stringify(userCountAboutData, null, 2));
    res.send(`<h1>About!</h1>
    <p>Счетчик просмотров сайта ${userCountHomeData.count} раз </p>
    <a href='/'>Home</a>`)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

