
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>Корневая страница</h1>
        <a href="/about">Переход на About</a>
        <p>Счетчик посещений сайта ${counterHome += 1} раз </p>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>About</h1>
        <a href="/">Переход на Home</a>
        <p>Счетчик посещений сайта ${counterAbout += 1} раз</p>`);
    } else {
        res.writeHead(400, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1>No Page</h1>');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порт ${port}`);
});

let counterHome = 0;
let counterAbout = 0;