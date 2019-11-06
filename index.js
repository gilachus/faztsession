const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')
//middleware

//routes
app.use(require('./routes/routes'));


app.listen(80);
console.log('server on port', 80);