const { Router } = require('express');
const router = Router();


//router.get('/', (req, res) => res.send('Habla cachon this is EXPRESS!'));
router.get('/', (req, res) => {
     res.render('index.ejs');
});
router.post('/register', (req, res) => {
     console.log(req.body);
     //req.session.my_variable = 'hello';
     //res.send('received');

     //req.session.my_variable = req.body;

     req.flash('usuario', req.body);
     req.flash('success','estas registrado');
     res.redirect('/products');
});
router.get('/profile', (req, res) => {
     //const data = req.session.my_variable;
     //delete req.session.my_variable;

     const data = req.flash('usuario')[0];
     res.render('profile', {data});
});
router.get('/products', (req, res) => {
     // const data = req.flash('usuario')[0];
     // const message = req.flash('success')[0];
     // res.render('profile', {data, message});
     res.render('products');
});


module.exports = router;
