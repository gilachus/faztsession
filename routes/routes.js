const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('Habla cachon this is EXPRESS!'))
module.exports = router;
