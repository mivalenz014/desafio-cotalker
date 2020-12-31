/* Ruta = http://localhost:4000/api/entries */

const { Router } = require('express');
const router = Router();
const { getData } = require('../controllers/entries');

router.get('/', getData);

module.exports = router;