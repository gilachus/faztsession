const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
var flash = require('connect-flash'); 


//settings
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
//global variable
app.use((req,res,next)=>{
    app.locals.message = req.flash('success');
    next();
});
//routes
app.use(require('./routes/routes'));


app.listen(80);
console.log('server on port', 80);