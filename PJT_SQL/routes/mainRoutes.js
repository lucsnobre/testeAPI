const express = require('express');
const router = express.Router();

// Importar rotas
const albumRoutes = require('../routes/routesAlbum');
const generoRoutes = require('../routes/routesGenero');
const musicaRoutes = require('../routes/routesMusica');
const artistaRoutes = require('../routes/routesArtista');
const gravadoraRoutes = require('../Controller/gravadora/ControllerGravadora')
const plataformaRoutes = require('../Controller/plataforma/ControllerPlataforma')
const premioRoutes = require('../Controller/premio/ControllerPremio')
const streamingRoutes = require('../Controller/streaming/ControllerStreaming')
const publicoRoutes = require('../Controller/publico/ControllerPublico')
const produtorRoutes = require('../Controller/produtor/ControllerProdutor')

// Definir rotas base
router.use('/albuns', albumRoutes);
router.use('/generos', generoRoutes);
router.use('/musicas', musicaRoutes);
router.use('/artistas', artistaRoutes);
router.use('/gravadora', gravadoraRoutes)
router.use('/plataforma', plataformaRoutes)
router.use('/premio', premioRoutes)
router.use('/streaming', streamingRoutes)
router.use('/publico', publicoRoutes)
router.use('/produtor', produtorRoutes)
// Definir outras rotas conforme necessário

module.exports = router;