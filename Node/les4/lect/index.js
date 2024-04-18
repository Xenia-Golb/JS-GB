const handleBars = require('handlebars')
const template = handleBars.compile('<p>{{someVar}} </p>');
const result = template({ someVar: 'Hello world' });
console.log(result);