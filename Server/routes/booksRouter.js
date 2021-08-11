const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.get('/',bookController.getAllBooks);

router.post('/',bookController.insertBook);

router.get('/:isbn',bookController.getOneBook);

router.delete('/:isbn',bookController.deleteBook);

router.put('/:isbn',bookController.updateBook);


module.exports = router;