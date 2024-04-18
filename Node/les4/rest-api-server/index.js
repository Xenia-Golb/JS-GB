const express = require('express');
const app = express();

let uniqueId = 0;
const articles = [];
app.get('/articles', (req, res) => {
    res.send({ articles });
});
app.get('/articles/id', (req, res) => {
    const article = articles
        .find((article) => article.id === Number(req.params.id));
    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });

    }
})
app.post('/articles', (req, res) => {
    uniqueId += 1;

    articles.push({
        id: uniqueId,
        ...req.body
    });
    res.send({
        id: uniqueId,
    });
})



app.listen(3000)
