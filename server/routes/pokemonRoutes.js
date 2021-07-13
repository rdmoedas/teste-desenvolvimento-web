const express = require('express');
const router = express.Router();
const controller = require('../controller/pokemonController');

router.get('/', controller.get)

router.post('/', controller.post)

router.delete('/:id', controller.softDelete)

router.put('/:id', controller.put)

module.exports = router;