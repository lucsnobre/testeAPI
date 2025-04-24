const express = require('express');
const router = express.Router();
const MusicaController = require('../controllers/MusicaController');

router.get('/', MusicaController.getMusicas);
router.get('/:id', MusicaController.getMusicaById);
router.post('/', MusicaController.createMusica);
router.put('/:id', MusicaController.updateMusica);
router.delete('/:id', MusicaController.deleteMusica);

module.exports = router;