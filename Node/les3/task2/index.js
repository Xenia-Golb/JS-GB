const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'))

// app.get('/', (req, res) => {
//     res.send(`<h1>Hello World!</h1>
//     <a href="/about">About</a>`)
// })
// app.get('/about', (req, res) => {
//     res.send(`<h1>About!</h1>
//     <a href='/'>Home</a>`)
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
