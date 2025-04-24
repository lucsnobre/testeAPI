const express = require('express');
const router = express.Router();
const GeneroController = require('../Controller/genero/ControllerGenero');

router.get('/', GeneroController.getGeneros);
router.get('/:id', GeneroController.getGeneroById);
router.post('/', GeneroController.createGenero);
router.put('/:id', GeneroController.updateGenero);
router.delete('/:id', GeneroController.deleteGenero);

module.exports = router;
