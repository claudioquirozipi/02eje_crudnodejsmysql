const express = require('express');
const router = express.Router();
const customerComtroller = require('../controllers/customerController');

router.get('/',customerComtroller.list);
router.post('/add', customerComtroller.save);
router.get('/delete/:id', customerComtroller.delete);
router.get('/edit/:id', customerComtroller.edit);
router.post('/edit/:id', customerComtroller.update);

module.exports = router;