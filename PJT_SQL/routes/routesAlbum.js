const express = require('express');
const router = express.Router();
const AlbumController = require('../controllers/AlbumController');

router.get('/', AlbumController.getAlbums);
router.get('/:id', AlbumController.getAlbumById);
router.post('/', AlbumController.createAlbum);
router.put('/:id', AlbumController.updateAlbum);
router.delete('/:id', AlbumController.deleteAlbum);

module.exports = router;